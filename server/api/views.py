from email.mime import image
import json
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer

# Create your views here.
@api_view(['GET'])
def index(request):
    overview = {
        'message': 'Made with love by @Rishikesh',
        '/api/posts': 'List of all posts',
        '/api/posts/<int:pk>': 'Detail of a post',
        '/api/categories': 'List of all categories',
    }
    return Response(overview)

######################## POSTS APIS #########################
@api_view(['GET'])
def posts(request):
  """
  List of all posts
  """
  
  posts = Post.objects.all()
  serializer = PostSerializer(posts, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def post(request, pk):
  """
  Detail of a post
  """

  post = Post.objects.get(pk=pk)
  serializer = PostSerializer(post)
  return Response(serializer.data)

@api_view(['POST'])
def create_post(request):
  """
  Create a post
  """
  categories = request.data.get("categories").split(",")
  categories = [Category.objects.get(name=category) for category in categories]

  for category in categories:
    print(type(category))

  title = request.data.get("title")
  content = request.data.get("content")
  image = request.data.get("image")
  # author = User.objects.get(username=request.user.username)
  # print(author.username)
  # if (categories)

  post = Post(title=title, content=content, image=image)
  # post.categories.set(categories)
  post.save()
  # post.categories.set(categories)

  postserializer = PostSerializer(post, data=request.data)

  if (postserializer.is_valid()):
    postserializer.save()
    return Response(postserializer.data, status=status.HTTP_201_CREATED)
  else:
    return Response(postserializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_post(request, pk):
  """
  Update a post
  """
  if (request.method == 'PUT'):
    post = Post.objects.get(id=pk)

    if (post is None):
      return Response("Post not found", status=status.HTTP_404_NOT_FOUND)


    post.title = request.data.get("title")
    post.content = request.data.get("content")
    post.author = User.objects.get(username=request.user.username)
    categories = request.data.get("categories")
    if categories is None:
      post.categories.clear()
    else:
      categories = categories.split(",")
    categories = [Category.objects.get(name=category) for category in categories]
    post.categories.set(categories)

    post.save()

    return Response(status=status.HTTP_200_OK)

  return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_post(request, pk):
  """
  Delete a post
  """
  if request.method == "DELETE":
    
    post = Post.objects.get(id=pk).delete()
    return Response("deleted succcessfully",status=status.HTTP_204_NO_CONTENT)

  return Response(status=status.HTTP_400_BAD_REQUEST)


######################## CATEGORIES APIS #########################
@api_view(['GET'])
def categories(request):
  """
  List of all categories
  """
  categories = Category.objects.all()
  serializer = CategorySerializer(categories, many=True)
  return Response(serializer.data)


@api_view(['POST'])
def create_category(request):
  """
  Create a category
  """
  
  name = request.data.get("name")
  category = Category(name=name)
  categoryserializer = CategorySerializer(category, data=request.data)

  if (categoryserializer.is_valid()):
    categoryserializer.save()
    return Response(categoryserializer.data, status=status.HTTP_201_CREATED)
  else:
    return Response(categoryserializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_category(request, pk):
  """
  Delete a category
  """
  if request.method == "DELETE":
    category = Category.objects.get(id=pk).delete()
    return Response("deleted succcessfully",status=status.HTTP_204_NO_CONTENT)

  return Response(status=status.HTTP_400_BAD_REQUEST)

######################## USERS APIS #########################
@api_view(['POST'])
def create_user(request):
  """
  Create a user
  """
  username = request.data.get('username')
  password = request.data.get('password')
  email = request.data.get('email')
  first_name = request.data.get('first_name')
  last_name = request.data.get('last_name')

  user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
  user.save()

  return Response(status=status.HTTP_201_CREATED)

# django only allows to get specific fields rather than teh whole user data
# @login_required(login_url='/api/login')
@api_view(['GET'])
def view_user(request):
  """
  Detail of a user
  """

  return Response(request.user.username)

@api_view(['PUT'])
def change_password(request):
  """
  Update a user
  """
  try:
    user = User.objects.get(username=request.user.username)
  except User.DoesNotExist:
    return Response("User not found", status=status.HTTP_404_NOT_FOUND)

  if request.method == 'PUT':
    user.set_password(request.data.get('password'))
    user.save()
    return Response(status=status.HTTP_200_OK)

  return Response(status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def delete_user(request):
#   """
#   Delete a user
#   """
#   if request.method == "DELETE":
#     request.user.delete()
#     return Response("deleted succcessfully",status=status.HTTP_204_NO_CONTENT)

#   return Response("Invalid request", status=status.HTTP_400_BAD_REQUEST)

# todo not working
@api_view(['POST', 'GET'])
def login(request):
  """
  Login user
  """

  if request.method == 'POST':
    
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request,username=username, password=password)
    if user is not None:
      login(request, user)
      return Response(status=status.HTTP_200_OK)
    else:
      return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
  else:
    return HttpResponse("This is login page", status=status.HTTP_200_OK)

@api_view(["GET"])
def logout(request):
  """
  Logout user
  """
  logout(request)
  return Response(status=status.HTTP_200_OK)

@api_view(['POST'])
def is_username_present(request):
  """
  Checks if username is already taken
  """

  username = request.data.get('username')
  if username is None:
    return Response("Invalid request", status=status.HTTP_400_BAD_REQUEST)

  if User.objects.filter(username=username).exists():
    return Response({"message" : "Username already taken", "status" : False})
  else:
    return Response({"message" : "Username available", "status" : True})