from django.contrib import admin
from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token
from api.views.signup import RegistrationAPIView
# noinspection PyUnresolvedReferences
from api.views.books import books, book_by_id
from api.views import category
from api.views.userlist import UserListAPI
from api.views.reviews import reviews
from api.views.user import current_user
urlpatterns = [
    path('login/', obtain_jwt_token), # post (token)
    path('register/', RegistrationAPIView.as_view()), # post (token)
    path('books/', books),
    path('books/<int:id>/', book_by_id),

    path('categories/', category.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', category.CategoryDetailAPIView.as_view()),
    path("categories/<int:category_id>/books/", category.BooksByCategoryAPIView.as_view()),
    path('ist/<int:user_id>/<int:list_id>/books/', UserListAPI.as_view()),
    path('books/<int:id>/reviews', reviews),
    path('current_user/', current_user, name='current_user'),
    # path('test/', userlist.create_user_wishlists)

]
