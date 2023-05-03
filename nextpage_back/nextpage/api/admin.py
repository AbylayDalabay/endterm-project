from django.contrib import admin
from .models.category import Category
from .models.book import Book
from .models.review import Review
from .models.rating import Rating
# admin.site.register(Category)
# admin.site.register(Book)
# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name')
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id','title')

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('id','book')
@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id','review')