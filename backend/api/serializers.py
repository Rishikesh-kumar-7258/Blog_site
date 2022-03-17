from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Post, Comment


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post 
        fields = ['id', 'title', 'desc', 'likes', 'views', 'date']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'desc', 'date']