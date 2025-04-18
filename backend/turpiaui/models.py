from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class City(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Category(models.Model): 
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class TouristPoint(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='tourist_points/', blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Favorite(models.Model): 
    point = models.ForeignKey(TouristPoint, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('point', 'user')