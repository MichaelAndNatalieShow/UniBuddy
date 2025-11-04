from django.db import models

class StyleProfile(models.Model):
    pacing=models.IntegerField()
    clarity=models.IntegerField()
    workload=models.IntegerField()
    structure=models.IntegerField()
    availability=models.IntegerField()
    grading=models.IntegerField()
    atmosphere=models.IntegerField()

    def __str__(self):
        return f"StyleProfile #{self.id}"

class User(models.Model):
    email=models.EmailField()
    created_at=models.DateTimeField(auto_now_add=True)
    user_name=models.TextField()
    school=models.TextField()
    major=models.TextField()
    target_colleges=models.ManyToManyField("University", blank=True)
    style_profile=models.OneToOneField(StyleProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_name


class Professor(models.Model):
    position_title=models.TextField()
    professor_name=models.TextField()
    department=models.TextField()
    style_profile=models.OneToOneField(StyleProfile, on_delete=models.CASCADE)

    def __str__(self):
        return self.professor_name

class Course(models.Model):
    department=models.TextField()
    units=models.IntegerField()
    course_id=models.TextField()
    course_title=models.TextField()
    offered_fall=models.BooleanField(default=False)
    offered_spring=models.BooleanField(default=False)
    offered_summer=models.BooleanField(default=False)
    calgetc_area=models.TextField()
    breadth_category=models.TextField()

    def __str__(self):
        return self.course_title

class Major(models.Model):
    major_name=models.TextField()
    major_code=models.TextField()
    tag_eligible=models.BooleanField()

    def __str__(self):
        return self.major_name

class CommunityCollege(models.Model):
    college_name=models.TextField()
    college_id=models.TextField()
    articulated=models.BooleanField(default=False)

    def __str__(self):
        return self.college_name

class University(models.Model):
    university_name=models.TextField()
    university_code=models.TextField()
    tag_eligible=models.BooleanField(default=False)
    majors_applicable=models.ManyToManyField("Major", blank=True)

    def __str__(self):
        return self.university_name
