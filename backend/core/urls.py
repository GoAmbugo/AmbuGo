from django.urls import path

from .views import *

urlpatterns = [
    path('profile/', ProfileDetailsView.as_view(), name='user-profile'),
]
