from django.views.generic import ListView, DetailView, CreateView
from .models import Post


class HomeListView(ListView):
    model = Post
    template_name = "home.html"


class PostDetailView(DetailView):
    model = Post
    template_name = "postDetails.html"


class CreatePostView(CreateView):
    model = Post
    template_name = "create_post.html"
    fields = "__all__"
