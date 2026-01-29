from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import ProjectCategory, Technology, Project
from .serializers import ProjectCategorySerializer, TechnologySerializer, ProjectListSerializer, ProjectDetailSerializer


class ProjectCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer
    lookup_field = 'slug'


class TechnologyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    lookup_field = 'slug'


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.select_related('category').prefetch_related('technologies', 'images').all()
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        return ProjectDetailSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        
        status_filter = self.request.query_params.get('status', 'published')
        queryset = queryset.filter(status=status_filter)
        
        category_slug = self.request.query_params.get('category')
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        
        technology_slug = self.request.query_params.get('technology')
        if technology_slug:
            queryset = queryset.filter(technologies__slug=technology_slug)
        
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | 
                Q(short_description__icontains=search) | 
                Q(description__icontains=search)
            )
        
        return queryset

    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured_projects = self.get_queryset().filter(is_featured=True, status='published')
        page = self.paginate_queryset(featured_projects)
        serializer = self.get_serializer(page, many=True)
        return self.get_paginated_response(serializer.data)
