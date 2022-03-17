from django.db import models
from django.contrib.auth.models import User

# Create your models here.
default = True

# model for posts
class Post(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=50)
    desc = models.TextField()
    likes = models.IntegerField()
    views = models.IntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=default)
    date = models.DateField(auto_now=True)


class Comment(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=default)
    desc = models.TextField()
    date = models.DateField(auto_now=True)