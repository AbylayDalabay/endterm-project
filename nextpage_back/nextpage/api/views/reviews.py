from api.models.review import Review
from rest_framework.views import APIView
from api.models.book import Book
from api.serializers.review import ReviewSerializer2
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
import json
@api_view(['GET','POST'])
def reviews(request,id):
    try:
        book = Book.objects.get(id=id)
    except:
        pass
    if request.method == 'GET':
        reviews = Review.objects.filter(book=book).all()
        serializer = ReviewSerializer2(reviews,many=True)
        return Response(
            serializer.data
        )
    if request.method == 'POST':
        data = json.loads(request.body)
        review_review = data.get('review','')
        review_user = User.objects.get(id=data.get('user',''))
        review_book = Book.objects.get(id=data.get('book',''))
        review = Review.objects.create(review=review_review,user=review_user,book=review_book)
        serializer = ReviewSerializer2(review,many=False)
        return Response(serializer.data)