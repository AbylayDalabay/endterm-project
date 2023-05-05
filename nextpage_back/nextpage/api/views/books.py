# noinspection PyUnresolvedReferences
from api.models.book import Book
import json
# noinspection PyUnresolvedReferences
# noinspection PyUnresolvedReferences
from api.models.category import Category
from django.http.response import HttpResponse, JsonResponse
# noinspection PyUnresolvedReferences
from api.serializers.book import BookSerializer2
from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework.decorators import api_view
@api_view(['GET'])
def books(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer2(books,many=True)
        return Response(
            serializer.data
        )
@api_view(['GET'])
def book_by_id(request, id):
    try:
        book = Book.objects.get(id=id)
    except:
        pass
    if request.method == 'GET':
        serializer = BookSerializer2(book,many=False)
        return Response(serializer.data)
    