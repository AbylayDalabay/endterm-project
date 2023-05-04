from django.db import models
# noinspection PyUnresolvedReferences

from api.models.book import Book

class Review(models.Model) :
    def __str__(self):
        return f'{self.count}'
    review = models.TextField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE)