from rest_framework import permissions

class IsCartOwnerOrIsSupplierOrIsAdmin(permissions.IsAdminUser):
    
    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        is_supplier = request.user.is_supplier

        return is_supplier or is_admin

    
    def has_object_permission(self, request, view, obj):

        return obj.user == request.user or request.method in permissions.SAFE_METHODS