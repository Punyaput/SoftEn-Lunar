from django.urls import path
from .views import UserDetailView, ClaimMoonPointView, register_user, whoami, moon_point_status

urlpatterns = [
    path('me/', UserDetailView.as_view(), name='user-detail'),
    path('claim-moon-point/', ClaimMoonPointView.as_view(), name='claim-moon-point'),
    path('moon-point-status/', moon_point_status),
    path('signup/', register_user),
    path('profile/', whoami),
]