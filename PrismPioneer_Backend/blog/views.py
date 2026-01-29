from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import Category, Tag, BlogPost
from .serializers import CategorySerializer, TagSerializer, BlogPostListSerializer, BlogPostDetailSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'slug'


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.select_related('author', 'category').prefetch_related('tags').all()
    
    def get_serializer_class(self):
        if self.action == 'list':
            return BlogPostListSerializer
        return BlogPostDetailSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        
        status_filter = self.request.query_params.get('status', 'published')
        queryset = queryset.filter(status=status_filter)
        
        category_slug = self.request.query_params.get('category')
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        
        tag_slug = self.request.query_params.get('tag')
        if tag_slug:
            queryset = queryset.filter(tags__slug=tag_slug)
        
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | 
                Q(excerpt__icontains=search) | 
                Q(content__icontains=search)
            )
        
        return queryset

    @action(detail=True, methods=['post'])
    def increment_views(self, request, slug=None):
        post = self.get_object()
        post.views += 1
        post.save()
        return Response({'views': post.views})

    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_posts = self.get_queryset().filter(is_featured=True, status='published')
        page = self.paginate_queryset(featured_posts)
        serializer = self.get_serializer(page, many=True)
        return self.get_paginated_response(serializer.data)
