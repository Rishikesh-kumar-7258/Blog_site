from django.urls import path
from . import views

urlpatterns = [
    path("", views.apiOverview, name="api-overview"),
    path("post/", views.uploadPost, name="upload-post"),
    path('edit/<str:id>/', views.editPost, name="editpost"),
    path('delete/<str:id>/', views.deletePost, name="delete-post"),
    path('list/', views.listPost, name="List-all"),


]