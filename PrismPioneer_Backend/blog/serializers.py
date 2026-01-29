from rest_framework import serializers
from .models import Category, Tag, BlogPost


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'created_at']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']


class BlogPostListSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username', read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'author_username', 'category_name', 'tags', 
                  'excerpt', 'featured_image', 'status', 'is_featured', 'views', 
                  'created_at', 'updated_at', 'published_at']


class BlogPostDetailSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username', read_only=True)
    category = CategorySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    tag_ids = serializers.ListField(
        child=serializers.IntegerField(), write_only=True, required=False
    )

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'author', 'author_username', 'category', 
                  'category', 'tags', 'tag_ids', 'excerpt', 'content', 
                  'featured_image', 'status', 'is_featured', 'views', 
                  'created_at', 'updated_at', 'published_at']
        read_only_fields = ['author', 'views', 'created_at', 'updated_at']

    def create(self, validated_data):
        tag_ids = validated_data.pop('tag_ids', [])
        post = BlogPost.objects.create(**validated_data)
        post.tags.set(tag_ids)
        return post

    def update(self, instance, validated_data):
        tag_ids = validated_data.pop('tag_ids', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        if tag_ids is not None:
            instance.tags.set(tag_ids)
        return instance
