/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */

const $image = $('.card__image', el);
const bigImagePath = $image.attr('data-big-image');

const $bigImage = $('<img />');

$bigImage.on('load', () => {
    $image.attr('src', $bigImage.attr('src'));
    $image.removeClass('card__image--blur');
});

$bigImage.attr('src', bigImagePath);
