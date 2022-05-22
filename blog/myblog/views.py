from django.http import HttpResponse
from django.shortcuts import render


def home(reqest):
    return HttpResponse("Hello world")
