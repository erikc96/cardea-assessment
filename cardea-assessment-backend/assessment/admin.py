from django.contrib import admin

from assessment.jobs import Job
from assessment.lists import List

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    pass

@admin.register(List)
class ListAdmin(admin.ModelAdmin):
    pass

