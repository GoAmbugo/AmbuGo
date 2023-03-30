from django.urls import path

from .views import *

urlpatterns = [
    path('sendotp/', SendOtp.as_view(), name='sendotp'),
    path('resendotp/', ResendOtp.as_view(), name='resendotp'),
    path('verifyotp/', VerifyOtp.as_view(), name='verifyotp')
]
