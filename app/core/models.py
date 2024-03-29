
import uuid
import os

from django.core.validators import RegexValidator
from django.db import models

from django_countries.fields import CountryField

from django.db.models.signals import post_save
from django.dispatch import receiver

from django.core.validators import MinValueValidator, MaxValueValidator

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

from django.conf import settings

def product_image_file_path(instance, filename):
    # Generate file path for new recipe image
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('uploads/product/', filename)

class UserManager(BaseUserManager):
    
    def create_user(self, email, password=None, is_supplier=False, **extra_fields):
        # Creates and save a new user
        if not email:
            raise ValueError('Users must have an email address!')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.is_supplier = is_supplier
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        # Creates and save a new superuser
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_supplier = True
        user.is_superuser = True
        user.save(using=self._db)
        return user




class User(PermissionsMixin, AbstractBaseUser):
    # Custom user model supports email instead of username
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    # address = models.ManyToManyField('Address', null=True)
    image = models.ImageField(null=True, blank=True, upload_to=product_image_file_path)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_supplier = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.name

class Supplier(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255, null=True)
    logo = models.ImageField(null=True, upload_to=product_image_file_path)


class Customer(models.Model):
    customer = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, upload_to=product_image_file_path)

# @receiver(post_save, sender=User)
# def update_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#     instance.profile.save()

class Address(models.Model):
    
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,related_name='address'
        )
    # phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
    #                              message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
    #                              )

    country=CountryField(
        blank_label='(select country)', 
        default='IQ',
        countries_flag_url='//www.dyclassroom.com/image/flags/{code}.png', 
        null=True, 
        blank=True,)
    fullname=models.CharField(max_length=64, null=True, blank=True)
    house_number=models.CharField(max_length=30)
    district=models.CharField(max_length=60)
    mobile=models.CharField(max_length=17)
    deliver_instructions=models.CharField(max_length=255, null=True, blank=True)
    address_type=models.CharField(max_length=100, null=True, blank=True)
    city=models.CharField(max_length=100, null=True, blank=True)
    pincode=models.CharField(max_length=10, null=True, blank=True)
    street=models.CharField(max_length=200, null=True, blank=True)
    state=models.CharField(max_length=255, null=True, blank=True)
    primary=models.BooleanField(default=False)
    
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True) 

    # country_dict=True

    

    def  __str__(self):
        return f"{self.district} - {self.house_number}"






class Tag(models.Model):
        # Tags to be used for a rescipe
    name = models.CharField(max_length=255)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    active= models.BooleanField(default=True)
    image = models.ImageField(upload_to='products', null=True)
    description = models.CharField(max_length=500, null=True)
    main_category=models.ForeignKey(
        'MainCategory',
        on_delete=models.CASCADE, 
        null=True
        )

    def __str__(self):
        return self.name


class MainCategory(models.Model):
    name = models.CharField(max_length=200)
    active = models.BooleanField(default=True)
    image = models.ImageField(null=True, upload_to=product_image_file_path)
    description = models.CharField(max_length=500, null=True)
    

    def __str__(self):
        return self.name

class Product(models.Model):
    # Recipe object
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
        # User__is_supplier__=True
    )
    title = models.CharField(max_length=255)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField('Tag')
    stock = models.IntegerField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField(null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=255, unique=True)
    featured = models.BooleanField(default=False)
    image = models.ImageField(null=True, upload_to=product_image_file_path)

    def __str__(self):
        return self.title



class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product,
                                on_delete=models.CASCADE,
                                related_name="reviews")
    review = models.TextField(blank=True, null=True)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1),
                                                     MaxValueValidator(5)])
    image = models.ImageField(null=True, blank=True, upload_to=product_image_file_path)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.rating)

class Cart(models.Model):
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    product = models.ForeignKey(
                            Product, 
                            on_delete=models.CASCADE,
                            related_name='cart'
                            )

    # product_detail = models.ForeignKey(
    #                         Product, 
    #                         on_delete=models.CASCADE,
    #                         related_name='cart-products'
    #                         )

    quantity = models.IntegerField(default=1)
    date_added = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    unique_together = [['user', 'product']]

    def __str__(self):
        return f"{self.quantity} of {self.product}"

    def get_total_product_price(self):
        return self.quantity * self.product.price

    def get_total_discount_product_price(self):
        return self.quantity * self.product.discount_price

    def get_amount_saved(self):
        return self.get_total_product_price() - self.get_total_discount_product_price()

    def get_final_price(self):
        if self.product.discount_price:
            return self.get_total_discount_product_price()
        return self.get_total_product_price()


class Shipment(models.Model):

    DELIVERY_OPTIONS = [
        ('fast', 'Fast'),
        ('normal', 'Normal'),
        ('Collective', 'Collective'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    delivery_term = models.CharField(
        max_length=12,
        choices=DELIVERY_OPTIONS,
        default='Normal',
    )
    description = models.TextField(null=True, blank=True)
    delivery_days = models.PositiveSmallIntegerField()
    rate=models.FloatField()
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):

        return f"{self.delivery_term}: ({self.delivery_days} days)"
    



class Order(models.Model):
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE)
    ref_code = models.CharField(max_length=20, blank=True, null=True)
    cart = models.ManyToManyField('Cart')
    date_added = models.DateTimeField(auto_now_add=True)
    date_ordered = models.DateTimeField()
    # ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey(
        'Address', related_name='shipping_address', on_delete=models.SET_NULL, blank=True, null=True)
    billing_address = models.ForeignKey(
        'Address', related_name='billing_address', on_delete=models.SET_NULL, blank=True, null=True)
    payment = models.ForeignKey(
        'Payment', on_delete=models.SET_NULL, blank=True, null=True)
    coupon = models.ForeignKey(
        'Coupon', on_delete=models.SET_NULL, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    '''
    1. Item added to cart
    2. Adding a billing address
    (Failed checkout)
    3. Payment
    (Preprocessing, processing, packaging etc.)
    4. Being delivered
    5. Received
    6. Refunds
    '''

    def __str__(self):
        return self.user.username

    # def get_total(self):
    #     total = 0
    #     for order_item in self.items.all():
    #         total += order_item.get_final_price()
    #     if self.coupon:
    #         total -= self.coupon.amount
    #     return total

class Payment(models.Model):
    pass

class Coupon(models.Model):
    pass



