from django.contrib.auth.base_user import BaseUserManager;
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models

# Create your models here.
class AppUserManager(BaseUserManager):

    def create_user(self, email, password, username, first_name, last_name):
        if not email:
            raise ValueError('An email is requiered')
        if not password:
            raise ValueError('A password is required')
        if not username:
            raise ValueError('A username is required')
        if not first_name:
            raise ValueError('A first name is required')
        if not last_name:
            raise ValueError('A last name is required')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, username, first_name, last_name):
        if not email:
            raise ValueError('An email is requiered')
        if not password:
            raise ValueError('A password is required')
        if not username:
            raise ValueError('A username is required')
        if not first_name:
            raise ValueError('A first name is required')
        if not last_name:
            raise ValueError('A last name is required')
        user = self.create_user(email, password, username, first_name, last_name)
        user.is_superuser = True
        user.save()
        return user
    
class AppUser(AbstractUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=320, unique=True)
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_picture = models.ImageField(upload_to='profile_imgs/', default='profile_imgs/default_user.svg')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    objects = AppUserManager()

    def __str__(self) -> str:
        return self.username
