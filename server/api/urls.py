from django.urls import path
from .views import BlogViewSets, UserDetailAPI, RegisterUserAPIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', BlogViewSets)

urlpatterns = [
    path("get-details", UserDetailAPI.as_view()),
    path('register', RegisterUserAPIView.as_view()),
]

urlpatterns += router.urls
