from django.db import models

# Create your models here.
class Post(models.Model):

    title = models.CharField(max_length=200)
    content = models.TextField()
    tags = models.CharField(max_length=200)
    date = models.DateField()
    author = models.CharField(max_length=50)
    image = models.ImageField()

    def __str__(self) -> str:
        return self.title