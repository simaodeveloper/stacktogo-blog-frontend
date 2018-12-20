!(function (window, document, undefined) {
    'use strict';

    $.scrollDepth({
        userTiming: false,
        pixelDepth: false,
        nonInteraction: false,
        gtmOverride: true,
    });

    const trackEvent = (selector, event, trackEvent, trackCategory, trackLabel) => {
        $(selector).on(event, function () {
            gtag('event', trackEvent, { 'event_category': trackCategory, 'event_label': trackLabel });
        });
    };

    const translate = {
        'index': 'home',
    };

    const page = translate[$body.prop('id')];

    // Code here

})(window, document, undefined);
