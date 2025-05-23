from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
from rest_framework import status
from .models import TouristPoint, City, Favorite, Category, Profile
from .serializers import TouristPointSerializer, CitySerializer, FavoriteSerializer, CategorySerializer, ProfileSerializer

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

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

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

class CustomObtainAuthToken(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):

            token, created = Token.objects.get_or_create(user=user)
            
            return JsonResponse({
                'token': token.key,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            })
        
        return JsonResponse({'error': 'Usuário ou senha incorretos'}, status=400)