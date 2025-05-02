from django.contrib import admin
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('order', 'amount', 'method', 'status', 'created_at')
    list_filter = ('status', 'method')
    search_fields = ('order__id', 'transaction_id')
    readonly_fields = ('created_at', 'transaction_id')
    date_hierarchy = 'created_at'