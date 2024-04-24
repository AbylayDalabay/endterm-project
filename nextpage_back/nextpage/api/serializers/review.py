from api.models.review import Review
from api.serializers.game import GameSerializer2
from api.serializers.user import UserUpdatingSerializer
from rest_framework import serializers

class ReviewSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    review = serializers.CharField()
    rating = serializers.IntegerField()
    game = GameSerializer2()
    user = UserUpdatingSerializer()


class ReviewSerializer2(serializers.ModelSerializer):
    game_title = serializers.SerializerMethodField(source='get_game_title')
    user_name = serializers.SerializerMethodField(source='get_user_name')
    class Meta:
        model = Review
        fields = ('id', 'review','rating', 'game', 'game_title','user','user_name')
    def get_book_title(self, obj):
        return obj.game.title
    def get_user_name(self,obj):
        return obj.game.username