from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),

    # user specific paths
    path('create_user/', views.create_user, name='Create User'),
    path('view_user/', views.view_user, name='View User'),
    path('change_password/', views.change_password, name='Change Password'),
    path('login/', views.login, name='Login'),
    path('logout/', views.logout, name='Logout'),
    # path('delete_user/', views.delete_user, name='Delete User'),
    
    # paths for posts
    path('create_post/', views.create_post, name='Create Post'),
    path('update_post/<int:pk>', views.update_post, name='Update Post'),
    path('posts', views.posts, name='Posts'),
    path('post/<int:pk>', views.post, name='Post'),
    path('delete_post/<int:pk>', views.delete_post, name='Delete Post'),


    # paths for categories
    path('create_category/', views.create_category, name='Create Category'),
    path('categories/', views.categories, name='Categories'),
    path('delete_category/<int:pk>', views.delete_category, name='Delete Category'),

]
