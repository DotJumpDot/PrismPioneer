from rest_framework import serializers
from .models import ProjectCategory, Technology, Project, ProjectImage


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = ['id', 'name', 'slug', 'description', 'created_at']


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'slug', 'icon']


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order']


class ProjectListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'short_description', 'category_name', 
                  'technologies', 'thumbnail', 'github_url', 'live_url', 
                  'status', 'is_featured', 'order', 'created_at', 'completed_at']


class ProjectDetailSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    technologies = TechnologySerializer(many=True, read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)
    technology_ids = serializers.ListField(
        child=serializers.IntegerField(), write_only=True, required=False
    )

    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'short_description', 'description', 
                  'category', 'technologies', 'technology_ids', 'thumbnail', 
                  'cover_image', 'github_url', 'live_url', 'demo_url', 
                  'status', 'is_featured', 'order', 'images', 'created_at', 
                  'updated_at', 'completed_at']

    def create(self, validated_data):
        technology_ids = validated_data.pop('technology_ids', [])
        images_data = validated_data.pop('images', [])
        project = Project.objects.create(**validated_data)
        project.technologies.set(technology_ids)
        for image_data in images_data:
            ProjectImage.objects.create(project=project, **image_data)
        return project

    def update(self, instance, validated_data):
        technology_ids = validated_data.pop('technology_ids', None)
        images_data = validated_data.pop('images', None)
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        if technology_ids is not None:
            instance.technologies.set(technology_ids)
        
        if images_data is not None:
            instance.images.all().delete()
            for image_data in images_data:
                ProjectImage.objects.create(project=instance, **image_data)
        
        return instance
