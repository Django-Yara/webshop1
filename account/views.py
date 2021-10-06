from django.shortcuts import render
# У каждого шаблона должен быть свой вид (контроллер)
# Виды, Контроллеры. Каждый вид определяет сценарий загрузки шаблонов.
def register(request):
    if request.method == 'GET':
        return render(request, 'account/register.html', context={
            'page_name': 'Регистрация',
            'page_app': 'account',
            'page_view': 'register'
        })
    elif request.method == 'POST':
        login x = request.POST.get('login')
        pass1 x = request.POST.get('pass1')
        pass2 x = request.POST.get('pass2')
        email x = request.POST.get('email')

        # 1 - Валидация данных ...

        # 2 - Сохранение пользователя в Базе Данных

        # 3 - Вывод отчёта ... Страница отчёта о регистрации
        return render(request, 'account/report.html', context={
            'page_name': 'Отчёт о регистрации',
            'page_app': 'account',
            'page_view': 'report'
        })
    # Нуджно дома: 1. создать страничку и 2. Прописать маршруты этой страницы