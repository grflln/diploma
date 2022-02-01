$(document).ready(() => {
    // $('#team-carousel').slick({
    //     slidesToShow: 3,
    // });

    $('.reviews-carousel-item-review-more').click(function () {
        let dots = $('#dots');
        let moreText = $('#read-more');
        let btnText = $('.reviews-carousel-item-review-more');

        if (dots.css('display', 'inline') === false) {
            dots.css('display', 'inline');
            moreText.css('display', 'none');

        } else {
            dots.css('display', 'none');
            btnText.remove();
            $('.reviews-carousel-item').css('padding-bottom', '125px');
            moreText.css('display', 'inline');

        }
    });

    $(function () {
        $("#faq-accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            icons: false,
        });
    });


    let switcher = $('.switch');
    let checkbox = $('.checkbox');
    switcher.addClass('after-color');


    checkbox.change(function () {
        if (checkbox.is(':checked')) {
            switcher.removeClass('before-color');
            switcher.addClass('after-color');
        } else {
            switcher.removeClass('after-color');
            switcher.addClass('before-color');
        }
    });

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

        var placemark = new ymaps.Placemark(myMap.getCenter(), {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "#" class="map-title">Туристическая компания «Northern Tour»</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<p class="map-description">1-й Загородный пер. 20, Минск, Беларусь</p>',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: '<div class="map-schedule"><span class="map-bold">Пн — Пт: </span>с 10:00 до 22:00</div>' + '<div class="map-schedule"><span class="map-bold">Сб — Вс: </span>с 10:00 до 22:00</div>',
        });
        // Добавим метку на карту.
        myMap.geoObjects.add(placemark);
        // Откроем балун на метке.
        placemark.balloon.open();
    }
});