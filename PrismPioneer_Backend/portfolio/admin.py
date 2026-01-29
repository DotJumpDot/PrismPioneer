from django.contrib import admin
from .models import ProjectCategory, Technology, Project, ProjectImage


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    ordering = ['order']


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'icon']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'is_featured', 'order', 'completed_at', 'created_at']
    list_filter = ['status', 'is_featured', 'category', 'technologies', 'completed_at']
    search_fields = ['title', 'short_description', 'description']
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ['technologies']
    inlines = [ProjectImageInline]
    date_hierarchy = 'created_at'
    ordering = ['-is_featured', 'order', '-created_at']
