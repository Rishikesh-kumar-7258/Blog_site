from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
  title = models.CharField(max_length=50)
  desc = models.TextField()
  uploaded_data = models.DateField()
  author = models.ForeignKey(User,  on_delete=models.CASCADE)
  category = models.ForeignKey("Category", on_delete=models.CASCADE)

class Likes(models.Model):
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  user = models.ForeignKey(User,  on_delete=models.CASCADE)
  date = models.DateField()

class Category(models.Model):
  name = models.CharField(max_length=50)