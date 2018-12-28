/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */


const $el = $(el);
const $title = $el.find('.card__title');

console.log($title.text().match(/\n/g));