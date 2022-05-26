from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .forms import PostForm, UpdateForm
from .models import Post


class HomeListView(ListView):
    model = Post
    template_name = "home.html"
    ordering = ['-id']


class PostDetailView(DetailView):
    model = Post
    template_name = "postDetails.html"


class CreatePostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = "create_post.html"


class UpdatePostView(UpdateView):
    model = Post
    form_class = UpdateForm
    template_name = "update_post.html"


class DeletePostView(DeleteView):
    model = Post
    template_name = "delete_post.html"

    success_url = reverse_lazy('home')
