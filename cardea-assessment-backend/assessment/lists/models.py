from django.db import models

class List(models.Model):
  name = models.CharField(max_length=100);
  description = models.TextField();
  image = models.CharField(max_length=300);
  listCurator = models.CharField(max_length=100);

