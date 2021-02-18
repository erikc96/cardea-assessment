from django.contrib import admin

from assessment.jobs.models import Job

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    pass

