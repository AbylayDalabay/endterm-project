from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def current_user(request):
    if request.user.is_authenticated:
        return Response({'id': request.user.id})
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)