from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# model for posts
class Post(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=50)
    desc = models.TextField()
    views = models.IntegerField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, default="admin")
    date = models.DateField(auto_now=True)


class Comment(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default="admin")
    desc = models.TextField()
    date = models.DateField(auto_now=True)

class Like(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now=True)