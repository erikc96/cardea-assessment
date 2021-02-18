from django.contrib import admin

from assessment.lists.models import List

@admin.register(List)
class ListAdmin(admin.ModelAdmin):
    pass
