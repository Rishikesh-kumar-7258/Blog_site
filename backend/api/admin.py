from django.contrib import admin
from .models import *

admin.site.register(Post) 
admin.site.register(Likes) 
admin.site.register(Category) 