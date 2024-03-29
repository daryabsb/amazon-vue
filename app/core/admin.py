from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

from core import models


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email', 'name', 'is_supplier']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('name', 'image',)}),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_supplier')}
        ),
        (_('Important Dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        ('None', {
            'classes': ('wide',),
            'fields': ('name','email', 'password1', 'password2', 'is_supplier')
        }),
    )


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Supplier)
admin.site.register(models.Customer)
admin.site.register(models.MainCategory)
admin.site.register(models.Address)
admin.site.register(models.Tag)
admin.site.register(models.Category)
admin.site.register(models.Product)
admin.site.register(models.Cart)
admin.site.register(models.Order)
admin.site.register(models.Payment)
admin.site.register(models.Shipment)
admin.site.register(models.Coupon)
admin.site.register(models.Review)