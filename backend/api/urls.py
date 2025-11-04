# api/urls.py
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    ProfessorViewSet,
    CourseViewSet,
    MajorViewSet,
    CommunityCollegeViewSet,
    UniversityViewSet,
    StyleProfileViewSet,
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'professors', ProfessorViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'majors', MajorViewSet)
router.register(r'community_colleges', CommunityCollegeViewSet)
router.register(r'universities', UniversityViewSet)
router.register(r'style_profiles', StyleProfileViewSet)

urlpatterns = router.urls
