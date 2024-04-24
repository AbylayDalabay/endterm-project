from django.db import models
from api.models.game import Game
from django.contrib.auth.models import User

class UserList(models.Model):
    def __str__(self):
        return f'{self.id}  {self.name}   {self.user.username}'
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="lists")
    games = models.ManyToManyField(Game)
    is_private = models.BooleanField(default=True)