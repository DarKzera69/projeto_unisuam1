var $btnAumentar = $("#btnAumentar");
    var $btnDiminuir = $("#btnDiminuir");
    var $elemento = $(".content").find("*"); // Encontra todos os elementos dentro do #content
    var fonts = [];
    var aumentarCounter = 0;
    var diminuirCounter = 0;

    function obterTamanhoFonte() {
        for (var i = 0; i < $elemento.length; i++) {
            fonts.push(parseFloat($elemento.eq(i).css('font-size')));
        }
    }
    obterTamanhoFonte();

    $btnAumentar.on('click', function () {
        if (aumentarCounter < 4) {
            for (var i = 0; i < $elemento.length; i++) {
                ++fonts[i];
                $elemento.eq(i).css('font-size', fonts[i]);
            }
            aumentarCounter++;
            diminuirCounter = 0;
        }
    });

    $btnDiminuir.on('click', function () {
        if (diminuirCounter < 4) {
            for (var i = 0; i < $elemento.length; i++) {
                --fonts[i];
                $elemento.eq(i).css('font-size', fonts[i]);
            }
            diminuirCounter++;
            aumentarCounter = 0;
        }
    });
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();
    })();