from rest_framework import serializers
from .models import Post, Category

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post

        # fields = '__all__'

        fields = ('id', 'title', 'content', 'author', 'categories', 'created_at', 'updated_at')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
    
    fields = ('id', 'name', 'created_at', 'updated_at')
