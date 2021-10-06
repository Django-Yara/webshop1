from django.db import models

# Create your models here.
class Producer(models.Model):
    # свойства моделей. Каждое св-во - это столбец в соотв таблице
    title = models.CharField(max_length=100)

    def __str__(self) -> str:
        return str(self.title)
