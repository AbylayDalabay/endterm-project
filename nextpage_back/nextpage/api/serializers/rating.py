# noinspection PyUnresolvedReferences
from api.models.rating import Rating
# noinspection PyUnresolvedReferences
from api.serializers.game import GameSerializer2
from rest_framework import serializers

class RatingSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    count = serializers.IntegerField()
    sum = serializers.IntegerField()
    game = GameSerializer2()


class RatingSerializer2(serializers.ModelSerializer):
    game_title = serializers.SerializerMethodField(source='get_game_title')
    class Meta:
        model = Rating
        fields = ('id', 'count','sum', 'game', 'game_title',)
    def get_book_title(self, obj):
        return obj.game.title