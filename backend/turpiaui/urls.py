from rest_framework.routers import DefaultRouter
from .views import CityViewSet, TouristPointViewSet, FavoriteViewSet, CategoryViewSet, register_view
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include


router = DefaultRouter()
router.register(r'cities', CityViewSet)
router.register(r'tourist-points', TouristPointViewSet)
router.register(r'favorites', FavoriteViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', obtain_auth_token, name='auth_token'),
    path('register/', register_view, name='register')
]