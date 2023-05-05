from django.http import JsonResponse
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers.category import CategorySerializer2
from api.serializers.book import BookSerializer2
from api.models.category import Category
from api.models.book import Book
from api.models.userlist import UserList
from django.contrib.auth.models import User
from api.serializers.userlist import ListSerializer2

