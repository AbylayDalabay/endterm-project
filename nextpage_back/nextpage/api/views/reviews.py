from api.models.review import Review
from rest_framework.views import APIView
from api.models.game import Game
from api.serializers.review import ReviewSerializer2
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from api.models.rating import Rating
from api.serializers.rating import RatingSerializer2
from rest_framework import status
from api.serializers.game import GameSerializer2
from api.serializers.user import UserUpdatingSerializer
import json
@api_view(['GET','POST'])
def reviews(request,id):
    try:
        game = Game.objects.get(id=id)
    except:
        pass
    if request.method == 'GET':
        reviews = Review.objects.filter(game=game).all()
        serializer = ReviewSerializer2(reviews,many=True)
        return Response(
            serializer.data
        )
    if request.method == 'POST':
        data = json.loads(request.body)
        review_review = data.get('review','')
        review_rating = data.get('rating','')
        review_user = User.objects.get(id=data.get('user',''))
        review_game = Game.objects.get(id=data.get('game',''))
        serializerGame = GameSerializer2(review_game,many=False)
        review_game_title = serializerGame.data['title']
        serializerUser = UserUpdatingSerializer(review_user,many=False)
        review = Review.objects.create(review=review_review,rating=review_rating, user=review_user,game=review_game)
        review_data = {'review': review_review,'rating': review_rating, 'user':serializerUser.data,'book':serializerGame.data}
        try:
            ratingGame = Rating.objects.get(book=review_game)
            ratingGame.count += 1
            ratingGame.sum += review_rating
            ratingGame.save()
            serializer = RatingSerializer2(data={'id':ratingGame.id,'count':ratingGame.count,'sum':ratingGame.sum,'book':serializerGame.data,'book_title':ratingGame.game_title})
            if serializer.is_valid():
                serializer.save()
        except:
            ratingGame = Rating.objects.create(count=1,sum=review_rating,book=review_game,book_title=review_game_title)
            serializer = RatingSerializer2(data={'id':ratingGame.id,'count':ratingGame.count,'sum':ratingGame.sum,'game':serializerGame.data,'game_title':ratingGame.game_title})
            if serializer.is_valid():
                serializer.save()
        serializer = ReviewSerializer2(data=review_data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
@api_view(['DELETE'])
def reviewDelete(request,id):
    try:
        review = Review.objects.get(id=id)
        ratingGame = Rating.objects.get(game=review.game)
        ratingGame.count -= 1
        ratingGame.sum -= review.rating
        ratingGame.save()
        serializer = RatingSerializer2(ratingGame,many=False)
        if serializer.is_valid():
            serializer.save()
        review.delete()
        return Response({'deleted': True})
    except:
        return Response({'error'},status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def rating(request,id):
    try:
        game = Game.objects.get(id=id) 
    except:
        return Response({'error'},status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        rating = Rating.objects.get(game=game)
        serializer = RatingSerializer2(rating,many=False)
        return Response(
            serializer.data
        )