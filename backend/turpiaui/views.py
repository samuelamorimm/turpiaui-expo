from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
from rest_framework import status
from .models import TouristPoint, City, Favorite, Category
from .serializers import TouristPointSerializer, CitySerializer, FavoriteSerializer, CategorySerializer

# Create your views here.

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class TouristPointViewSet(viewsets.ModelViewSet):
    queryset = TouristPoint.objects.all()
    serializer_class = TouristPointSerializer

class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data['username'] 
            email = data['email']        
            password = data['password'] 

            if not username or not password:
                return JsonResponse({'error': 'Username e senha são obrigatórios!'}, status=400)
            
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Usuário já existe!'}, status=400)
            
            user = User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'message': 'Usuário registrado com sucesso!', 'user': user.username})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        
    return JsonResponse({'error': 'Método não permitido'}, status=405)