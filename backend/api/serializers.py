from rest_framework import serializers

from django.contrib.auth.models import User, Group
from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["username", "password", "email"]
  

class GroupSerializer(serializers.ModelSerializer):
  class Meta:
    model = Group
    fields = ["name"]

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = "__all__"

class LikesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Likes
    fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = "__all__"