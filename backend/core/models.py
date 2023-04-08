from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
import re

# Create your models here.

# Create your CustomProfileManager here.


class CustomProfileManager(BaseUserManager):
    def _create_profile(self, phone, first_name, last_name, gender, date_of_birth, **extra_fields):

        if not phone:
            raise ValueError("Phone must be provided")

        if len(first_name) >= 1:
            x = re.search(r'^[a-zA-Z][a-zA-Z\s]{0,254}$', first_name)

            if not x:
                raise ValueError(
                    "First name can't be empty and can't have special characters.")

        if len(last_name) >= 1:
            x = re.search(r'^[a-zA-Z][a-zA-Z\s]{0,254}$', last_name)

            if not x:
                raise ValueError(
                    "Last name can't be empty and can't have special characters.")

        if len(gender) >= 1 and gender != 'M' and gender != 'F' and gender != 'O':
            raise ValueError(
                "Gender field is incorrect.")

        profile = self.model(
            phone=phone,
            first_name=first_name,
            last_name=last_name,
            gender=gender,
            date_of_birth=date_of_birth,
            **extra_fields
        )

        profile.save(using=self._db)
        return profile

    def create_profile(self, phone, first_name, last_name, gender, date_of_birth, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)
        return self._create_profile(phone, first_name, last_name, gender, date_of_birth, **extra_fields)

    def create_superprofile(self, phone, first_name, last_name, gender, date_of_birth, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_profile(phone, first_name, last_name,  gender, date_of_birth, **extra_fields)

# Create your Profile Model here.


class Profile(AbstractBaseUser, PermissionsMixin):
    # Abstractbaseuser has password, last_login, is_active by default
    phone = models.CharField(db_index=True, unique=True, max_length=15)
    first_name = models.CharField(max_length=240, default='', blank=True)
    last_name = models.CharField(max_length=255, default='', blank=True)
    gender = models.CharField(max_length=255, default='', blank=True)
    date_of_birth = models.CharField(
        max_length=255, default='', blank=True)
    is_onboarded = models.BooleanField(default=False)

    # must needed, otherwise you won't be able to loginto django-admin.
    is_staff = models.BooleanField(default=True)
    # must needed, otherwise you won't be able to loginto django-admin.
    is_active = models.BooleanField(default=True)
    # this field we inherit from PermissionsMixin.
    is_superuser = models.BooleanField(default=False)

    password = None  # no password is required in our model

    objects = CustomProfileManager()

    USERNAME_FIELD = 'phone'

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'
