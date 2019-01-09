const $window   = $(window);
const $document = $(document);
const $body     = $('body');

let wW          = $window.outerWidth();
let wH          = $window.outerHeight();
let dH          = $document.outerHeight();

if (Is.mobile.ANY()) {
    $body.addClass('mobile');
} else {
    $body.addClass('desktop');
}

if (Is.desktop.MAC()) {
    $body.addClass('mac');
}

if(Is.desktop.IE()) {
    $body.addClass('ie');
}

if(Is.desktop.IE10()) {
    $body.addClass('ie10');
}

if(Is.desktop.IE11()) {
    $body.addClass('ie11');
}

if(Is.desktop.EDGE()) {
    $body.addClass('edge');
}

if(Is.desktop.CHROME()) {
    $body.addClass('chrome');
}

if(Is.desktop.FIREFOX()) {
    $body.addClass('firefox');
}

if(Is.desktop.SAFARI()) {
    $body.addClass('safari');
}


$document.on('preloaded.before', function () {
    $window
    .on('resize', function () {
        wW = $window.outerWidth();
        wH = $window.outerHeight();
        dH = $document.outerHeight();
    });

    Component.init();

    if (typeof Navigation !== 'undefined') { Navigation.init(); }
    if (typeof Ticker !== 'undefined') { Ticker.init(); }

    // Add your code here

    $window.trigger('resize');
});

$document.on('preloaded.after', function () {
    $window
        .on('scroll', function () {
            if (!Is.mobile.ANY()) {
                Animator.onScroll();
            }
        })
        .trigger('scroll');

    // your code here

    const $images = $('[data-lazy-image]');

    $images.each((index, image) => {
        const $image = $(image);
        const lazyImagePath = $image.attr('data-lazy-image');

        const $lazyImage = $('<img />');

        $lazyImage.on('load', () => {
            $image.attr('src', $lazyImage.attr('src'));
            $image.removeClass('blur');
        });

        $lazyImage.attr('src', lazyImagePath);
    });
});

$body.waitForImages(true)
    .progress((loaded, count, success) => {
        count++;

        let percent = (loaded * 100 / count);

        TweenMax.to('.preloader__bar__progress', .6, { width: percent+'%', ease: Expo.easeInOut});
    })
    .done(() => {
        TweenMax.to('.preloader__bar__progress', .6, { width: '100%', onComplete: () => {
            $document.trigger('preloaded.before');

            TweenMax.to('.preloader', .4, { opacity: 0, display: 'none', onComplete: () => $document.trigger('preloaded.after') });
        } });
    });
