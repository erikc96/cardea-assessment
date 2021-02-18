from django.db import models
from assessment.lists.models import List

class Job(models.Model):
  jobTitle = models.CharField(max_length=100);
  company = models.CharField(max_length=100);
  location = models.CharField(max_length=100);
  salaryMin = models.DecimalField(max_digits=10, decimal_places=2);
  salaryMax = models.DecimalField(max_digits=10, decimal_places=2);
  applyLink = models.CharField(max_length=50);
  lists = models.ManyToManyField(List)


