from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from api.models import Post, Comment
from api.serializers import PostSerializer, CommentSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


@api_view(["GET"])
def index(request):
    overView = {
        'index' : '',
        'getData' : 'getData/',
        'deleteData' : 'delteData/',
        'getComments' : 'getComments',
        'addPost' : 'addPost/',
        'addComment' : 'addComment/',
    }

    return Response(overView)

#api to get posts data
@api_view(["GET"])
def getData(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

# api to delete a particular post
@api_view(["GET", "DELETE"])
def deleteData(request, id):
    if request.method == "DELETE":
        post = Post.objects.get(id=id)
        post.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        return Response("This is deleteData")

#api to get comments
@api_view(["GET"])
def getComments(request):

    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)

    return Response(serializer.data)

#api to delete Comments
@api_view(["GET", "DELETE"])
def deleteComment(request, id):

    if request.method == "DELETE":
        comment = Comment.objects.get(id=id)
        comment.delete()
        return Response(status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        return Response("This is delte comment")

#api to add post
@api_view(["POST"])
def addPost(request):
    
    if request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# api to add comments
@api_view(["POST"])
def addComment(request):

    if request.method == "POST":
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# api to update post
@api_view(["PUT"])
def updatePost(request, id):
    
    if request.method == "PUT":
        post = Post.objects.get(id=id)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# adding users
@api_view(["POST"])
def addUser(request):

    if request.method == "POST":
        first_name, last_name, email, password = request.data;
        user = User.objects.create_user(first_name, email, password)

        user.last_name = last_name
        user.save()

        return Response("User created successfully")
    
    return Response(status.HTTP_400_BAD_REQUEST)