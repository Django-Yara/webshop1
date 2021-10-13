from django.urls import path
from .views import register, entry, sign_out, ajax_reg
# Для каждого маршрута представление прописываем отдельно
urlpatterns = [ # Это списак (коллекция) маршрутов
    path('register', register), # в '' пишем имя пути к странице. Может отличаться от tml меня ля маскировки пути
    path('entry', entry),
    path('logout', sign_out),
    path('ajax_reg', ajax_reg) # Зарегистрируем маршрут к этой функции
]