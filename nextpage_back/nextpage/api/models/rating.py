from django.db import models
from api.models.book import Book

class Rating(models.Model) :
    def __str__(self):
        return f'{self.count}'
    count = models.IntegerField()  # count of voted users
    sum = models.FloatField()  # sum of given ratings
    book = models.ForeignKey(Book, on_delete=models.CASCADE)