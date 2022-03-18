from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getData/', views.getData, name='getData'),
    path('deleteData/', views.deleteData, name='deleteData'),
    path('getComments/', views.getComments, name="getComments"),
    path('deleteData/<int:id>', views.deleteData, name="deleteData"),
    path('addPost/', views.addPost, name="addPost"),
    path('addComment/', views.addComment, name="addComment"),
    path('deleteComment/<int:id>', views.deleteComment, name="deleteComment"),
    path('updatePost/<int:id>', views.updatePost, name="updatePost"),
    path('getUser/<str:username>', views.getUser, name="getUser"),
    path('addUser', views.addUser, name='addUser'),
    path('changePassword', views.changePassword, name='changePassword')
]
