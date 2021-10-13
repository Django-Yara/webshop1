$(document).ready(function() {

    $('.add-to-cart-btn').click(function() {
        let productId = $(this).prev().val(); // взяли предидущий (prev) элемент от ршіб его значение

        alert('Select product with ID: ' + productId);
    });

});