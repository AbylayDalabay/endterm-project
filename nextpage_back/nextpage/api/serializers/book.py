from api.models.book import Book
from api.serializers import CategorySerializer2
from rest_framework import serializers

class BookSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    author = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    img = serializers.CharField()
    pages = serializers.FloatField()
    category = CategorySerializer2


class BookSerializer2(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'category')