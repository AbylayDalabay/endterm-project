from django.db import models
# noinspection PyUnresolvedReferences
from api.models.game import Game

class Rating(models.Model) :
    def __str__(self):
        return f'{self.count}'
    count = models.IntegerField(default=0)  # count of voted users
    sum = models.IntegerField(default=0)  # sum of given ratings
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    game_title = models.CharField(max_length=255,default=0)