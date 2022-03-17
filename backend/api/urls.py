from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getData/', views.getData, name='getData'),
    path('deleteData/', views.deleteData, name='deleteData'),
    path('getComments/', views.getComments, name="getComments"),
    path('deleteData/<int:id>', views.deleteData, name="deleteData"),
]
