import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
# noinspection PyUnresolvedReferences
from api.serializers.category import CategorySerializer2
# noinspection PyUnresolvedReferences
from api.serializers.game import GameSerializer2
# noinspection PyUnresolvedReferences
from api.models.category import Category
# noinspection PyUnresolvedReferences
from api.models.game import Game
# noinspection PyUnresolvedReferences
from api.models.userlist import UserList
from django.contrib.auth.models import User
# noinspection PyUnresolvedReferences
from api.models.category import Category
# noinspection PyUnresolvedReferences
# noinspection PyUnresolvedReferences
from api.models.userlist import UserList
from django.contrib.auth.models import User
# noinspection PyUnresolvedReferences
from api.serializers.userlist import ListSerializer2



class UserListAPI(APIView):
    


    def get(self, request, user_id, list_id):
        userlist = UserList.objects.get(pk=list_id)
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)


class UserListDetailAPI(APIView):
    def get(self, request,  list_id):
        user_id = request.user
        # return JsonResponse({user_id:99})
        userlist = UserList.objects.get(pk=list_id)
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)
    
class GetUsersListsAPI(APIView):
    def getListObject(self, user):
        try:
            return UserList.objects.filter(user=user)
        except UserList.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = request.user
        userlists = self.getListObject(user)
        serializer = ListSerializer2(userlists, many=True)
        return Response(serializer.data)
    

class GameOneUserListAPI(APIView):
    def getListObject(self, list_name, user):
        try:
            return UserList.objects.get(name=list_name, user=user)
        except User.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def getBook(self, id):
        try:
            return Game.objects.get(pk=id)
        except Game.DoesNotExist as e:
            return HttpResponse(status=404)

    def get(self, request, list_name):
        user = request.user
        userlist = self.getListObject(list_name, user)
        games = userlist.games.all()
        # if (books.count()==0):
        #     return JsonResponse({"not":"found"})
        # else:
            
        serializer = GameSerializer2(games, many=True)
        #     serializer = ListSerializer2(userlist)
        return Response(serializer.data)
    def post(self, request, list_name):
        data = json.loads(request.body)

        game_id = data.get('game','')
        game = self.getBook(game_id)
        user = request.user
        userlist = self.getListObject(list_name, user)
        userlist.games.add(game)
        userlist.save()
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)
    
    def delete(self, request, list_name) :
        data = json.loads(request.body)
        game_id = data.get('game','')
        game = self.getBook(game_id)
        user = request.user
        userlist = self.getListObject(list_name, user)
        userlist.games.remove(game)
        serializer = ListSerializer2(userlist)
        return Response(serializer.data)



class ListOfGames(APIView):
    def get(self, request, game_id):
        game = Game.objects.get(pk=game_id)
        ulist = game.userlist_set.all()
        serializer = ListSerializer2(ulist, many=True)
        return Response(serializer.data)
    

class GameOneOtherListAPI(APIView):
    def getListObject(self, list_name, user):
        try:
            return UserList.objects.get(name=list_name, user=user)
        except User.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def getGame(self, id):
        try:
            return Game.objects.get(pk=id)
        except Game.DoesNotExist as e:
            return HttpResponse(status=404)

    def get(self, request, list_name, user_id):
        user = User.objects.get(pk=user_id)
        userlist = self.getListObject(list_name, user)
        games = userlist.games.all()

        # if (books.count()==0):
        #     return JsonResponse({"not":"found"})
        # else:

        if (games.count()==0):
            return Response(games)
        else:
            
                serializer = GameSerializer2(games, many=True)
        #     serializer = ListSerializer2(userlist)
                return Response(serializer.data)
    