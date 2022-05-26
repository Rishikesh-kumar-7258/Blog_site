from django.urls import path
from .views import HomeListView, PostDetailView, CreatePostView, UpdatePostView, DeletePostView

urlpatterns = [
    path('', HomeListView.as_view(), name="home"),
    path('post/<int:pk>', PostDetailView.as_view(), name="post details"),
    path('create_post', CreatePostView.as_view(), name="create_post"),
    path('update_post/<int:pk>', UpdatePostView.as_view(), name="update_post"),
    path('delete_post/<int:pk>', DeletePostView.as_view(), name="delete_post"),
]
