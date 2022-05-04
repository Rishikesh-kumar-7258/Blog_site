from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

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
  pass

@api_view(['GET'])
def post(request, pk):
  """
  Detail of a post
  """

  pass

@api_view(['POST'])
def create_post(request):
  """
  Create a post
  """
  
  title = request.data.get("title")
  content = request.data.get("content")
  author = User.objects.get(username=request.user.username)
  # if (categories)

  post = Post(title=title, content=content, author=author)
  post.categories.add(request.data.get("categories"))

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
  pass

@api_view(['DELETE'])
def delete_post(request, pk):
  """
  Delete a post
  """
  pass


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
@api_view(['GET'])
def view_user(request):
  """
  Detail of a user
  """
  user = {
    "username" : request.user.username,
    "email" : request.user.email,
    "first_name" : request.user.first_name,
    "last_name" : request.user.last_name,
    "last_login" : request.user.last_login,
    "date_joined" : request.user.date_joined,
  }
  
  return Response(user)

# @api_view(['PUT'])
# def update_user(request):
#   """
#   Update a user
#   """
#   user = User.objects.get(username=request.user.username)
#   user.username = request.data.get('username')
#   user.password = request.data.get('password')
#   user.email = request.data.get('email')
#   user.first_name = request.data.get('first_name')
#   user.last_name = request.data.get('last_name')
#   user.save()

#   return Response(status=status.HTTP_205_RESET_CONTENT)

@api_view(['DELETE'])
def delete_user(request, pk):
  """
  Delete a user
  """
  

# todo not working
# @api_view(['POST'])
# def login(request):
#   """
#   Login user
#   """

#   username = request.data.get('username')
#   password = request.data.get('password')

#   user = authenticate(request,username=username, password=password)
#   if user is not None:
#     login(request, user)
#     return Response(status=status.HTTP_200_OK)
#   else:
#     return Response(status=status.HTTP_401_UNAUTHORIZED)

# @api_view(["GET"])
# def logout(request):
#   """
#   Logout user
#   """
#   logout(request)
#   return Response(status=status.HTTP_200_OK)
