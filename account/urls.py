from django.urls import path
from .views import register
# Для каждого маршрута представление прописываем отдельно
urlpatterns = [ # Это списак (коллекция) маршрутов
    path('register', register) # в '' пишем имя пути к странице. Может отличаться от tml меня ля маскировки пути
]