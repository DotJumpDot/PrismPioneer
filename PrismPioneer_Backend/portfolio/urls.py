from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectCategoryViewSet, TechnologyViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'categories', ProjectCategoryViewSet, basename='projectcategory')
router.register(r'technologies', TechnologyViewSet, basename='technology')
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
]
