from django.contrib.auth.models import User, Group
from django.contrib.auth.hashers import make_password

from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Category, Post

from api.serializers import CategorySerializer, PostSerializer, UserSerializer

@api_view(["GET"])
def index(request):
  urlmap = {
    "home" : "http://localhost:8000/"
  }
  return Response(urlmap)

@api_view(["GET", "POST"])
def users(request):

  if request.method == "GET":
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)

  if request.method == "POST":
    data = request.data 
    data['password'] = make_password(data['password'])
    serializer = UserSerializer(data=data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=200)

    return Response(serializer.errors, status=401)

@api_view(["GET", "POST"])
def posts(request):
  if request.method == "GET":
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)
  
  if request.method == "POST":
    data = request.data 
    serializer = PostSerializer(data=data)

    if serializer.is_valid():
      serializer.save()

      return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)

@api_view(["GET", "DELETE"])
def post(request, pk):

  if request.method == "GET":
    try:
      post = Post.objects.get(pk=pk)
      serializer = PostSerializer(post)
      return Response(serializer.data)
    except Exception as e:
      return Response("No such post Present")

    

  # if request.method == "DELETE":
  #   post = Post.objects.get(pk=pk)
  #   serializer = PostSerializer(post)


@api_view(["GET"])
def categories(request):
  serializer = CategorySerializer(Category.objects.all(), many=True)

  return Response(serializer.data)