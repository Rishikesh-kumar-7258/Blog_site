from django.views.generic import ListView, DetailView, CreateView

from .forms import PostForm
from .models import Post


class HomeListView(ListView):
    model = Post
    template_name = "home.html"


class PostDetailView(DetailView):
    model = Post
    template_name = "postDetails.html"


class CreatePostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = "create_post.html"
