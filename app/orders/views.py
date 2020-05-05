
from rest_framework.viewsets import ModelViewSet

from rest_framework.authentication import TokenAuthentication

from orders.serializers import CartSerializer, OrderSerializer, ShipmentSerializer

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from orders.permissions import IsCartOwnerOrIsSupplierOrIsAdmin
from core.models import Cart, Order, Shipment

# # Create your views here.


class CartViewset(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """Return objects for the current authenticated user only"""
        return self.queryset.filter(user=self.request.user).order_by('-date_added')

    def perform_create(self, serializer):
        """Create a new object"""
        serializer.save(user=self.request.user)


class OrderViewset(ModelViewSet):
    #     """Base viewset for user owned recipe attributes"""
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """Return objects for the current authenticated user only"""
        return self.queryset.filter(user=self.request.user).order_by('-date_added')

    def perform_create(self, serializer):
        """Create a new object"""
        
        serializer.save(user=self.request.user)

class ShipmentViewset(ModelViewSet):
#     """Base viewset for user owned recipe attributes"""
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer

    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """Return objects for the current authenticated user only"""
        return self.queryset.filter(user=self.request.user).order_by('-date_added')

    def perform_create(self, serializer):
        """Create a new object"""
        
        serializer.save(user=self.request.user)