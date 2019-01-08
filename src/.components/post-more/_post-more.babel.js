const $el = $(el);
const $socialButton = $('[data-js-social]', el);

$socialButton.on('click', function() {
    const $currentButton = $(this);

    const socialName = $currentButton.attr('data-js-social');

    const params = [
        location.href,
        $('[itemprop="name"]').attr('content'),
        $('[itemprop="description"]').attr('content')
    ];

    Share[socialName](...params);
});

