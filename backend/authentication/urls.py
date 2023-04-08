from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView
)

from .views import *

urlpatterns = [
    path('sendotp/', SendOtp.as_view(), name='sendotp'),
    path('resendotp/', ResendOtp.as_view(), name='resendotp'),
    path('verifyotp/', VerifyOtp.as_view(), name='verifyotp'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
