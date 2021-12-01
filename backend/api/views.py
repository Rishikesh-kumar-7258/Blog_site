from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Post
from api.serializers import PostSerializer

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    urls = {
        'Post' : '/api/post/',
        'Edit' : '/api/edit/<str:id>/',
        'Delete' : '/api/delete/<str:id>/',
        'List' : '/api/list/'
    }
    return Response(urls)

@api_view(['POST'])
def uploadPost(request):

    return Response("This is working - post")

@api_view(['GET', 'POST'])
def editPost(request):

    return Response("This is working - edit")

@api_view(['DELETE'])
def deletePost(request):

    return Response("This is working - delete")

@api_view(['GET'])
def listPost(request):

    posts = Post.objects.all()

    serializer = PostSerializer(data=posts, many=True)

    if serializer.is_valid():
        return Response(serializer.data)
    else : 
        return Response(serializer.errors)