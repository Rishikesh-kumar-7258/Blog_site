from django.urls import path
from .views import HomeListView, PostDetailView, CreatePostView

urlpatterns = [
    path('', HomeListView.as_view(), name="home"),
    path('post/<int:pk>', PostDetailView.as_view(), name="post details"),
    path('create_post', CreatePostView.as_view(), name="create_post")
]
