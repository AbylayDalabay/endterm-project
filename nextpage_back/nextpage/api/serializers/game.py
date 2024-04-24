# noinspection PyUnresolvedReferences
from api.models.game import Game
# noinspection PyUnresolvedReferences
from api.serializers.category import CategorySerializer2
from rest_framework import serializers

class GameSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    author = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    img = serializers.CharField()
    chapters = serializers.FloatField()
    category = CategorySerializer2()


class GameSerializer2(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField(source='get_category_name')
    class Meta:
        model = Game
        fields = ('id', 'title', 'author', 'description', 'img', 'chapters', 'category','category_name',)
    def get_category_name(self, obj):
        return obj.category.name
    