from django.urls import path
from .views import *
urlpatterns = [
  path("", index, name="index"),
  path("users/", users, name="users"),
  path("posts/", posts, name="posts"),
  path("post/<int:pk>", post, name="post"),
  path("categories/", categories, name="categories")
]