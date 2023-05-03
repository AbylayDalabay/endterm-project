from django.contrib import admin
from django.urls import path
from api import views
from rest_framework_jwt.views import obtain_jwt_token
# noinspection PyUnresolvedReferences
from api.views.signup import RegistrationAPIView
from api.views import category
urlpatterns = [
    # path('hell/', views.postb),
    path('login/', obtain_jwt_token), # post (token)
    path('register/', RegistrationAPIView.as_view()), # post (token)


    path('categories/', category.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', category.CategoryDetailAPIView.as_view()),

]
