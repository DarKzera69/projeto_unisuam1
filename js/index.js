
    let activeFontAccessibility,countAumentar,countDiminuir = false;

    var btnAumentar = jQuery('#btnAumentar');
    var btnDiminuir = jQuery('#btnDiminuir');

    btnAumentar.on('click', function(){
        countAumentar = true;
        countDiminuir = false;

        jQuery(".content").find("*").each(function() {
            var thisTextElement = jQuery(this);
            var atualFontSize = parseFloat(thisTextElement.css('font-size'));
  
            if (!thisTextElement.data('original-font-size')) {

                thisTextElement.data('original-font-size', atualFontSize);
                activeFontAccessibility = true;

            } else {

                thisTextElement.css('font-size', '');                
                thisTextElement.removeData('original-font-size');
                activeFontAccessibility = false;
                return;
            }

            if(activeFontAccessibility && countAumentar){

                var newFontSize = atualFontSize + Math.round(atualFontSize * 0.25) / 2;
                thisTextElement.css('font-size', newFontSize + 'px');
                
            }
            
        });

    });

    btnDiminuir.on('click', function(){
        countAumentar = false;
        countDiminuir = true;

        jQuery(".content").find("*").each(function() {
            var thisTextElement = jQuery(this);
            var atualFontSize = parseFloat(thisTextElement.css('font-size'));
  
            if (!thisTextElement.data('original-font-size')) {

                thisTextElement.data('original-font-size', atualFontSize);
                activeFontAccessibility = true;

            } else {

                thisTextElement.css('font-size', '');                
                thisTextElement.removeData('original-font-size');
                activeFontAccessibility = false;
                return;
            }

            if(activeFontAccessibility && countDiminuir){

                var newFontSize = atualFontSize + Math.round(atualFontSize * 0.25) - 5;
                thisTextElement.css('font-size', newFontSize + 'px');
                
            }
            
        });

    });
    


    /** fim font */
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