from django.db import models
from producers.models import Producer
from categories.models import Category
# https://metanit.com/python/django/    Руководство по веб-фреймворку Django
# Create your models here.
class Product(models.Model):
    # свойства моделей. Каждое св-во - это столбец в соотв таблице
    title = models.CharField(max_length=100)  # https://metanit.com/python/django/4.2.php
    about = models.TextField(max_length=500) # Типы полей формы
    picture = models.FileField(upload_to='pictures/')
    price = models.FloatField()
    amount = models.IntegerField()
    producer = models.ForeignKey(Producer, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.title)