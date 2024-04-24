
# noinspection PyUnresolvedReferences
from api.models.userlist import UserList
# noinspection PyUnresolvedReferences

from rest_framework import serializers
from django.contrib.auth.models import User
# noinspection PyUnresolvedReferences
from api.models.userlist import UserList
# noinspection PyUnresolvedReferences
from rest_framework import serializers
from django.contrib.auth.models import User
# noinspection PyUnresolvedReferences
from api.serializers.game import GameSerializer2


class ListSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    user = User
    games = GameSerializer2(many=True)


class ListSerializer2(serializers.ModelSerializer):
    class Meta:
        model = UserList
        fields = ('id', 'name', 'user', 'games', )

    
    