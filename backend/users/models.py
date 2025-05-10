from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    moon_points = models.PositiveIntegerField(default=0)
    last_moon_point_claim = models.DateField(null=True, blank=True)
    total_co2_saved = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_energy_saved = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    streak_days = models.PositiveIntegerField(default=0)
    
    def claim_moon_point(self):
        today = timezone.now().date()
        if self.last_moon_point_claim != today:
            # Check if it's a consecutive day
            if self.last_moon_point_claim and (today - self.last_moon_point_claim).days == 1:
                self.streak_days += 1
            elif not self.last_moon_point_claim:
                self.streak_days = 1
            else:
                self.streak_days = 1  # Reset streak
            
            # Bonus points for streaks
            bonus = 0
            if self.streak_days >= 7:
                bonus = 2
            elif self.streak_days >= 3:
                bonus = 1
                
            self.moon_points += 1 + bonus
            self.last_moon_point_claim = today
            self.save()
            return True, bonus
        return False, 0

    def calculate_impact(self):
        from orders.models import Order
        
        orders = Order.objects.filter(user=self, status='delivered')
        total_co2 = 0
        total_energy = 0
        
        self.total_co2_saved = total_co2
        self.total_energy_saved = total_energy
        self.save()
        return total_co2, total_energy

    def __str__(self):
        return self.username