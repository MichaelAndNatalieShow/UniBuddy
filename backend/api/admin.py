from django.contrib import admin
from .models import (
    StyleProfile, User, Professor,
    Course, Major, CommunityCollege, University
)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("user_name", "email", "school", "major")
    search_fields = ("user_name", "email", "school", "major")
    list_filter = ("school", "major")

admin.site.register(StyleProfile)
admin.site.register(Professor)
admin.site.register(Course)
admin.site.register(Major)
admin.site.register(CommunityCollege)
admin.site.register(University)
