from django.contrib import admin
from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token
from api.views.signup import RegistrationAPIView
# noinspection PyUnresolvedReferences
from api.views.books import books, book_by_id
from api.views import category
from api.views import userlist
urlpatterns = [
    path('login/', obtain_jwt_token), # post (token)
    path('register/', RegistrationAPIView.as_view()), # post (token)
    path('books/', books),
    path('books/<int:id>/', book_by_id),


    path('categories/', category.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', category.CategoryDetailAPIView.as_view()),
    path("categories/<int:category_id>/books/", category.BooksByCategoryAPIView.as_view()),
    path('list/<int:list_id>/books/', userlist.UserListDetailAPI.as_view()),
    path('list/<str:list_name>/books/', userlist.BookOneUserListAPI.as_view()),
    path('list/', userlist.GetUsersListsAPI.as_view()),
    # path('list/<int:id>/<str:list_name>/books/', userlist.BookOneUserListAPI.as_view()),
    # path('test/', userlist.create_user_wishlists)


]


