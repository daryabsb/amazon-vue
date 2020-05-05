from rest_framework import serializers
from users.serializers import UserSerializer
from products.serializers import MyProductSerializer
from core.models import Product, Cart, Order, Shipment


class ShipmentSerializer(serializers.ModelSerializer):
      
      class Meta:
            model = Shipment
            fields = '__all__'
            depth = 2

class CartSerializer(serializers.ModelSerializer):
    
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all()
    )
    
    user = UserSerializer(read_only=True)

    # date_added = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Cart
        fields = ('id', 'user', 'ordered', 'product', 'quantity', 
        'date_added')
         
        read_only_Fields = ('id',)

        # def get_date_added(self, instance):
        #     return instance.date_added.strftime("%B %d, %Y")
    


class OrderSerializer(serializers.ModelSerializer):
#     # Serializer for tag objects
    # cart = CartSerializer(many=True)
    
    cart = serializers.PrimaryKeyRelatedField(
      many=True,
      queryset=Cart.objects.filter(ordered=False)
    )

    # date_added = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = ('ref_code', 'user', 'cart', 'payment', 'coupon',
                  'billing_address', 'shipping_address', 'date_added', 'being_delivered',
                    'received', 'refund_requested', 'refund_granted'
                  )
        read_only_Fields = ('id',)

        def get_date_added(self, instance):
            return instance.date_added.strftime("%B %d, %Y")
