from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import (
    User,
    Professor,
    Course,
    Major,
    CommunityCollege,
    University,
    StyleProfile,
)
from .serializers import (
    UserSerializer,
    ProfessorSerializer,
    CourseSerializer,
    MajorSerializer,
    CommunityCollegeSerializer,
    UniversitySerializer,
    StyleProfileSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['get'])
    def transcript(self, request, pk=None):
        user = self.get_object()
        return Response({"transcript": getattr(user, "transcript_text", "")})


class ProfessorViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer
    permission_classes = [IsAuthenticated]


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]


class MajorViewSet(viewsets.ModelViewSet):
    queryset = Major.objects.all()
    serializer_class = MajorSerializer
    permission_classes = [IsAuthenticated]


class CommunityCollegeViewSet(viewsets.ModelViewSet):
    queryset = CommunityCollege.objects.all()
    serializer_class = CommunityCollegeSerializer
    permission_classes = [IsAuthenticated]


class UniversityViewSet(viewsets.ModelViewSet):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer
    permission_classes = [IsAuthenticated]


class StyleProfileViewSet(viewsets.ModelViewSet):
    queryset = StyleProfile.objects.all()
    serializer_class = StyleProfileSerializer
    permission_classes = [IsAuthenticated]
