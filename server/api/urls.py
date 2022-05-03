from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create_user/', views.create_user, name='Create User'),
    path('view_user/', views.view_user, name='View User'),
    # path('update_user/', views.update_user, name='Update User'),
    path('login/', views.login, name='Login'),
    path('logout/', views.logout, name='Logout'),

]
