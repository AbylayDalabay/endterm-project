from django.http import JsonResponse
from api.models.game import Game
from django.contrib.auth import get_user_model
from django.views.decorators.http import require_GET
# def search_book(request):
#     search_term = request.GET.get('term', '')
#     results = Book.objects.filter(title__icontains=search_term).values('id', 'title')
#     return JsonResponse(list(results), safe=False)
def search_games(request, term):
    games = Game.objects.filter(title__istartswith=term[0:10])
    data = [{'id': game.id, 'title': game.title} for game in games]
    return JsonResponse(data, safe=False)
def search_users(request, term):
    User = get_user_model()
    users = User.objects.filter(username__istartswith=term[0:10])
    data = [{'id': user.id, 'username': user.username} for user in users]
    return JsonResponse(data, safe=False)