from django.urls import path
from .views import UserRegisterView
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('register', UserRegisterView.as_view(), name='user_register'),
    path('login', LoginView.as_view(), name='login'),
    # path('login',  name="login"),
    # path('users/logout', name="user_logout"),
]
