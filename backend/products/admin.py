from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'lunar_score', 'lunar_powered', 'stock', 'created_at', 'cosmic_effects')
    list_filter = ('lunar_powered', 'created_at')
    search_fields = ('name', 'description')
    list_editable = ('price', 'stock')  # ✅ Allow editing stock
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'image')
        }),
        ('Pricing', {
            'fields': ('price', 'discount_per_moon_point')
        }),
        ('Inventory', {
            'fields': ('stock',)
        }),
        ('Lunar', {
            'fields': ('lunar_score', 'lunar_powered')
        }),
        ('Cosmic Effects', {
            'fields': ('cosmic_effects',)
        }),
    )