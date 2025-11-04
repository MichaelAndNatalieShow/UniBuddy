from rest_framework import serializers
from .models import User, Professor, Course, Major, CommunityCollege, University, StyleProfile

class StyleProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StyleProfile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    style_profile = StyleProfileSerializer()

    class Meta:
        model = User
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    style_profile = StyleProfileSerializer()

    class Meta:
        model = Professor
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CommunityCollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityCollege
        fields = '__all__'

class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = '__all__'

class UniversitySerializer(serializers.ModelSerializer):
    majors_applicable = MajorSerializer(many=True)

    class Meta:
        model = University
        fields = '__all__'