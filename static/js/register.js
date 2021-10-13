$(document).ready(function() {
// Тут сценарии управления на стороне пользователя (браузера)
    // 1. Переменные - флаги результатов валидации:
    let res1 = false;
    let res2 = false;
    let res3 = false;
    let res4 = false;

    // 2. Валидация логина:
        $('#login').blur(function() {
            let loginX = $('#login').val();
            let loginR = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
            if (loginR.test(loginX) == true) {
                // тут будет проверка занятости логина. $('#login-err').text('логин - правильный');
                $.ajax({
                    url: '/account/ajax_reg',
                    data: 'login=' + loginX,
                    success: function(result) {
                        if (result.message === 'занят') {
                            $('#login-err').text('Логин - занят! Введите другой');
                            res1 = false;
                        } else {
                            $('#login-err').text('');
                            res1 = true;
                        }
                    }
                });
            } else {
                $('#login-err').text('логин - НЕ правильный');
                res1 = false;
            }
        });

    // 3. Валидация 1-го  пароля:
        $('#pass1').blur(function() {
            let pass1X = $('#pass1').val();
            let pass1R = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{8,}$/;
            if (pass1R.test(pass1X) == true) {
                $('#pass1-err').text(''); // проверка занятости логина.
                res2 = true;
            } else {
                $('#pass1-err').text('Пароль - НЕ правильный');
                res2 = false;
            }
        });

    // 4. Валидация 2-го  пароля:
        $('#pass2').blur(function() {
            let pass1X = $('#pass1').val();
            let pass2X = $('#pass2').val();
            if (pass1X == pass2X) {
                $('#pass2-err').text('');
                res3 = true;
            } else {
                $('#pass2-err').text('Пароли - НЕ совпадают');
                res3 = false;
            }
        });

    // 5. Валидация E-Mail:
        $('#email').blur(function() { // blur - єто сам процесс потери фокуса, т.е. віход из поля ввода
            let emailX = $('#email').val();
            let emailR = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            if (emailR.test(emailX) == true) {
                $('#email-err').text(''); // проверка email
                res4 = true;
            } else {
                $('#email-err').text('E-Mail - НЕ правильный');
                res4 = false;
            }
        });

    // #. фИНАЛЬНАЯ ПРОВЕРКА:
    $('#submit').click(function() {


        //fin check? Финвльная проверка
        if (res1 == true && res2 == true && res3 == true && res4 == true) {
            $('#form-1').attr('onsubmit', 'return true'); // - разблокировка формы
        } else {
            $('#form-1').attr('onsubmit', 'return false'); // -переблокировка формі
            alert('Форма содержит некорректные данные! \nОтправка данніх заблокированна!');
        }
    });

});