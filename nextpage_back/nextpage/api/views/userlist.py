import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from api.serializers.category import CategorySerializer2
from api.serializers.book import BookSerializer2
from api.models.category import Category
from api.models.book import Book
from api.models.userlist import UserList
from django.contrib.auth.models import User
from api.serializers.userlist import ListSerializer2



class UserListDetailAPI(APIView):
    def get(self, request,  list_id):
        user_id = request.user
        # return JsonResponse({user_id:99})
        userlist = UserList.objects.get(pk=list_id)
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)
    


class BookOneUserListAPI(APIView):
    def getListObject(self, list_name, user):
        try:
            return UserList.objects.get(name=list_name, user=user)
        except User.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def getBook(self, id):
        try:
            return Book.objects.get(pk=id)
        except Book.DoesNotExist as e:
            return HttpResponse(status=404)
#     def getUser(self, user_id):
#         try:
#             return User.objects.get(pk=user_id)
#         except User.DoesNotExist as e:
#             return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        

    def get(self, request, list_name):
        user = request.user
        userlist = self.getListObject(list_name, user)
        books = userlist.books.all()
        if (books.count()==0):
            return JsonResponse({"not":"found"})
        else:
                serializer = BookSerializer2(books)
                # serializer = ListSerializer2(userlist)
                return Response(serializer.data)
    def post(self, request, list_name):
        data = json.loads(request.body)

        book_id = data.get('book','')
        book = self.getBook(book_id)
        user = request.user
        userlist = self.getListObject(list_name, user)
        userlist.books.add(book)
        userlist.save()
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, list_name) :
        data = json.loads(request.body)
        book_id = data.get('book','')
        book = self.getBook(book_id)
        user = request.user
        userlist = self.getListObject(list_name, user)
        userlist.books.remove(book)
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


