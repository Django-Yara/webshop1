from django.contrib import admin
from .models import Category
# Register your models here.
admin.site.register(Category) # зарегистрировать модель категорнии. Теперь категории появятся в админ панели