import profile

from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
# noinspection PyUnresolvedReferences
from api.views.signup import RegistrationAPIView
# noinspection PyUnresolvedReferences
from api.views.user import user_info
# noinspection PyUnresolvedReferences
from api.views.games import games, game_by_id, get_random_games
# noinspection PyUnresolvedReferences
from api.views import category
# noinspection PyUnresolvedReferences
from api.views.userlist import UserListAPI
# noinspection PyUnresolvedReferences
from api.views import category
# noinspection PyUnresolvedReferences
from api.views import userlist

from api.views.reviews import reviews,rating
from api.views.user import user_info

# noinspection PyUnresolvedReferences
from api.views.profile import ProfileDetailAPIView
from api.views.user import user_info,getUser
from api.views.search import search_games,search_users


urlpatterns = [
    
    path('login/', obtain_jwt_token), # post (token)
    path('register/', RegistrationAPIView.as_view()), # post (token)
    path('games/', games),
    path('games/<int:id>/', game_by_id),
    path('logged/', user_info),
    path('profile/<int:id>', getUser),
    path('categories/', category.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', category.CategoryDetailAPIView.as_view()),
    path("categories/<int:category_id>/games/", category.GamesByCategoryAPIView.as_view()),
    path('ist/<int:user_id>/<int:list_id>/games/', UserListAPI.as_view()),
    path('list/<int:list_id>/games/', userlist.UserListDetailAPI.as_view()),
    path('lists/game/<int:game_id>/', userlist.ListOfGames.as_view()),
    path('list/<str:list_name>/games/', userlist.GameOneUserListAPI.as_view()),

    path('list/', userlist.GetUsersListsAPI.as_view()),
    path('profile/', ProfileDetailAPIView.as_view()),
    path('games/<int:id>/reviews', reviews),
    path('games/<int:id>/rating', rating),
    path('search/<str:term>/', search_games, name='search_games'),
    path('users/search/<str:term>/', search_users, name='search_users'),
    path('games/popular', get_random_games),
    path('list/<str:list_name>/games/<int:user_id>/', userlist.GameOneOtherListAPI.as_view()),
    # path('')
]