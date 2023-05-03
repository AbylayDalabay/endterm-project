from django.http import JsonResponse
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers.category import CategorySerializer2
from api.models.category import Category


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)

class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, category_id):
        instance = self.get_object(category_id)
        serializer = CategorySerializer2(instance)
        try:
            return Response(serializer.data)
        except Category.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

class BooksByCategoryAPIView(APIView):
    def get(self, request, category_id):
        category = CategoryDetailAPIView.get_object(self, category_id)
        