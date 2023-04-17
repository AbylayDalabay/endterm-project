from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from api.models import Category
from api.models import Book
import json
from django.http.response import JsonResponse
# Create your views here.

# def postcat(request):
#
#
#     with open('api/static/books.json', 'r') as f:
#         obj = json.loads(f.read())
#     categories = set()
#
#     for r in obj['results']:
#         l = r['genre'].split(',')
#         for i in l:
#             if i != '':
#                 categories.add(i)
#
#     for i in categories:
#         c = Category(name=i)
#         c.save()
#     return JsonResponse({"II":"kk"}, safe=False)

def postb(request):
    import json

    with open('api/static/books.json', 'r') as f:
        obj = json.loads(f.read().encode('utf-8'))
    categories = set()

    d = list()
    i = 0
    for r in obj['results']:
        i +=1

        title = r['title']
        genre = r['genre'].split(',')
        author = r['author']
        desc = r['desc']
        img = r['img']
        pages = r['pages']
        # rating = r['rating']
        nd = {
            'id': i,
            'title': title,
            'author': author,
            'desc': desc,
            'img': img,
            'pages': pages
            #  'rating': rating
        }
        if genre[0] != '':
            nd['category'] = genre[0]
        else:
            nd['category'] = 'Undetermined'
        d.append(nd)

    return JsonResponse(d, safe=False,json_dumps_params={'indent' : 2})
