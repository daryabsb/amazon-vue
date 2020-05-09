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

    product_id = MyProductSerializer(source='product', read_only=True)
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), )

    # user = UserSerializer(read_only=True)

    total_item_price = serializers.SerializerMethodField()

    date_added = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Cart
        fields = ('id', 'ordered', 'product', 'product_id', 'quantity', 'total_item_price',
                  'date_added')
        # extra_kwargs = {'product': {'view_only': True}}
        read_only_Fields = ('id','ordered','product',)
        # depth = 1


    # def update(self, instance, validated_data):
    #     # Update a user, setting the password correctly and return it
    #     product = instance.product
    #     print(instance)
    #     return instance(product=product)

    def get_total_item_price(self, obj):
        return obj.get_total_product_price()

    def get_product_detail(self, serializer):
        prod_detail = serializer(read_only=True)
        return prod_detail

    def get_date_added(self, instance):
        return instance.date_added.strftime("%B %d, %Y")


class OrderSerializer(serializers.ModelSerializer):
    #     # Serializer for tag objects
    # cart = CartSerializer(many=True)

    cart = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Cart.objects.filter(ordered=False)
    )

    date_added = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = ('ref_code', 'user', 'cart', 'payment', 'coupon',
                  'billing_address', 'shipping_address', 'date_added', 'being_delivered',
                  'received', 'refund_requested', 'refund_granted'
                  )
        read_only_Fields = ('id',)

    def get_date_added(self, instance):
        return instance.date_added.strftime("%B %d, %Y")
