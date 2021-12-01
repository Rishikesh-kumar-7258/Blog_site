from rest_framework import serializers
from api.models import Post

class PostSerializer(serializers.ModelSerializer):
    
    class meta:
        model = Post
        fields = '__all__'