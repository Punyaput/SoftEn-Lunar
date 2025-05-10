from django.db import models

# products/models.py

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/')
    lunar_powered = models.BooleanField(default=True)
    lunar_score = models.PositiveIntegerField(
        help_text="Score from 1-100 showing environmental impact",
        default=0,
    )
    discount_per_moon_point = models.DecimalField(
        max_digits=5, decimal_places=2,
        default=1.00,
        help_text="Discount amount per moon point in currency"
    )
    stock = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    cosmic_effects = models.JSONField(
        default=list,
        help_text="A list of fun, cosmic effects this product allegedly has."
    )

    def __str__(self):
        return self.name
