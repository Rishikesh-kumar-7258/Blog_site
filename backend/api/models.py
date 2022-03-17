from django.db import models

# Create your models here.

# model for posts
class Post(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=50)
    desc = models.TextField()
    likes = models.IntegerField()
    views = models.IntegerField()
    #author = models.ForeignKey(Users)
    date = models.DateField(auto_now=True)


class Comment(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    #author = models.ForeignKey(Users)
    desc = models.TextField()
    date = models.DateField(auto_now=True)