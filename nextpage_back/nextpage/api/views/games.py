# noinspection PyUnresolvedReferences
from api.models.game import Game
import json

# noinspection PyUnresolvedReferences
# noinspection PyUnresolvedReferences
from api.models.category import Category
from django.http.response import HttpResponse, JsonResponse
# noinspection PyUnresolvedReferences
from api.serializers.game import GameSerializer2
from rest_framework.views import APIView
import random
# noinspection PyUnresolvedReferences
from rest_framework.response import Response
from rest_framework.decorators import api_view
@api_view(['GET'])
def games(request):
    if request.method == 'GET':
        games = Game.objects.all()
        serializer = GameSerializer2(games,many=True)
        return Response(
            serializer.data
        )
def get_random_games(request):
    total_games = Game.objects.count()
    random_ids = [random.randrange(total_games) for i in range(3)]
    random_games = Game.objects.filter(id__in=random_ids).values()
    return JsonResponse(list(random_games),safe=False)

@api_view(['GET'])
def game_by_id(request, id):
    try:
        game = Game.objects.get(id=id)
    except:
        pass
    if request.method == 'GET':
        serializer = GameSerializer2(game,many=False)
        return Response(serializer.data)
# def delete_books_with_characters():
#     books_to_delete = Game.objects.filter(title__icontains='Ã¶©âÄÐµ½Ð°')
#     books_to_delete.delete()