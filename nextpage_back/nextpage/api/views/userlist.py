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



class UserListAPI(APIView):
    


    def get(self, request, user_id, list_id):
        userlist = UserList.objects.get(pk=list_id)
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)


        



# def create_user_wishlists(request):
#         for i in User.objects.all():

#                 UserList.objects.create(user=i, name=f'Reading')
#                 UserList.objects.create(user=i, name=f'Read')
#                 UserList.objects.create(user=i, name=f'Favorites')
#                 UserList.objects.create(user=i, name=f'Planned')
#                 UserList.objects.create(user=i, name=f'Abandoned')
#         return JsonResponse({"all":"done"})


