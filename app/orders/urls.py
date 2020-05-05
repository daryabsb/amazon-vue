from django.urls import path, include
from rest_framework.routers import DefaultRouter

from orders import views

router = DefaultRouter()
router.register('carts', views.CartViewset, basename='carts')
router.register('orders', views.OrderViewset, basename='orders')
router.register('Shipment', views.ShipmentViewset, basename='shipment')




# app_name = 'orders'

urlpatterns = [
    path('', include(router.urls)),
]