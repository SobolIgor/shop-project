document.addEventListener("DOMContentLoaded", function() {
    var cartCounter = document.querySelector(".header-cart");
    var addToCartButtons = document.querySelectorAll(".item-actions__cart");

    // Добавляем обработчик клика на каждую кнопку "Add to cart"
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Получаем текущее значение счетчика корзины
            var cartCount = parseInt(cartCounter.getAttribute("data-cart-count"));
            // Увеличиваем значение счетчика корзины при клике на кнопку "Add to cart"
            cartCount++;
            // Обновляем значение атрибута data-cart-count
            cartCounter.setAttribute("data-cart-count", cartCount);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
            const heartButtons = document.querySelectorAll('.btn img[src="images/heart_b.png"]');

            heartButtons.forEach(img => {
                const button = img.closest('.btn');
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    button.classList.toggle('active');
                });
            });
        });





            // Change quantity
            const decrementBtns = document.querySelectorAll(".decrement-button");
            const incrementBtns = document.querySelectorAll(".increment-button");
            const inputFields = document.querySelectorAll(".product-quantity input");

            decrementBtns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    let currentValue = parseInt(inputFields[index].value);
                    if (currentValue > 1) {
                        inputFields[index].value = currentValue - 1;
                    }
                });
            });

            incrementBtns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    let currentValue = parseInt(inputFields[index].value);
                    inputFields[index].value = currentValue + 1;
                });
            });



            // add slick
          $(document).ready(function(){
      $(".Slidebar_block").slick({
        adaptiveHeight: true, // автоматическое распределение высоты слайдов
        slidesToShow: 1, // количество слайдов для показа одновременно
        slidesToScroll: 1, // количество слайдов для прокрутки за раз
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
      });
    });


    // modal window
      $(document).ready(function() {
      // Скрыть модальное окно при загрузке страницы
      $('.modal').hide();

      // Открытие модального окна при клике на кнопку "More details"
      $('.item-actions__more').click(function() {
        $('.modal').fadeIn();
      });

      // Закрытие модального окна при клике на кнопку "X"
      $('.btn-close').click(function() {
        $('.modal').fadeOut();
      });

      // Закрытие модального окна при отправке формы
      $('form').submit(function() {
        $('.modal').fadeOut();
        return false; //
      });
    });