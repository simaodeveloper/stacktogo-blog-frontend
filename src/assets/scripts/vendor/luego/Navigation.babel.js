const Navigation = {
    _firstLoad: true,
    _scrollingTo: false,
    _selector: 'a:not([href="#"], [href^="javascript:void(0)"])',
    _routes: {},

    init() {
        SvgFix();

        $body.on('click', Navigation._selector, function (e) {
            const $this = $(this);
            const url = Navigation.cleanURL($this.attr('href'));

            if ($(`[data-url="${url}"]`).length && Navigation.hasController(url)) {
                e.preventDefault();

                Navigation.setURL(url, 2);

                // Fechar o menu do mobile
                $body.removeClass('overflow-hidden');
                $html.removeClass('overflow-hidden');
                $('.nav-header').removeClass('show');
                TweenMax.to($('.overlay-menu'), .5, { display: 'none', opacity: 0 });
            }
        });

        $window.on('popstate', function (e) {
            Navigation.parse();
            Navigation._firstLoad = false;
        });

    },

    cleanURL(url) {
        url = url.replace(window.location.origin, '').replace(new RegExp(`^${base}`), '').replace(window.location.hash, '').replace(window.location.search, '').replace(/^\/+/, '').replace(/\/+$/, '');
        return url ? url + '/' : '.';
    },

    getURL() {
        return this.cleanURL(window.location.href);
    },

    setURL(url, trigger = 1) {
        const currentURL = this.getURL();

        const queryString = window.location.search;

        url = this.cleanURL(url);

        if (currentURL != url || trigger === 2) {
            history.pushState({}, '', url + (queryString ? queryString : ''));

            SvgFix();

            this.helpers.markMenuActive(url);

            if (trigger !== 0) {
                $window.trigger('popstate');
                $body.trigger('page.open');
            }
        }
    },

    go(url) {
        this.setURL(url);
        this.parse();
    },

    getController(url) {
        return this.cleanURL(url || this.getURL()).split('/')[0];
    },

    hasController(url) {
        let controller = this.getController(url);

        return typeof this._routes[controller] != 'undefined';
    },

    parse() {
        let url = this.getURL();
        let controller = this.getController(url);

        this.helpers.markMenuActive(url);

        if (typeof this._routes[controller] != 'undefined') {
            this._routes[controller](url);
        }
    },

    on(controller, cb) {
        this._routes[controller] = cb;
    },

    helpers: {
        markMenuActive(url) {
            url = Navigation.cleanURL(url);

            const controller = Navigation.getController(url);

            $('header nav .active').removeClass('active');
            $menuItem = $(`header nav [href="${url}"]:not(.btn-arrow)`);

            if ($menuItem.length > 1 || $menuItem.length == 0) {
                $menuItem = $(`header nav [href^="${controller}"]:not(.btn-arrow)`).eq(0);
            }

            $menuItem.addClass('active');

            let $li = $menuItem.parent();
            let uriprev = $li.prev().find('a').attr('href');
            let urinext = $li.next().find('a').attr('href');

            if ($menuItem.attr('href') == 'bem-vindo') {
                $('.btn-prev').addClass('btn-disable');
                urinext = 'saiba-mais';
            } else {
                $('.btn-prev').removeClass('btn-disable');
            }

            if ($menuItem.attr('href') == 'compartilhe') {
                $('.btn-next').addClass('btn-disable');
            } else {
                $('.btn-next').removeClass('btn-disable');
            }

            $('.btn-prev').attr('href', uriprev);
            $('.btn-next').attr('href', urinext);
        },

        scrollTo(url) {
            Navigation._scrollingTo = true;

            $window.trigger('resize');

            let maxY = dH - wH;
            let y;

            if (typeof url != 'number') {
                let $page = typeof url == 'string' ? $(`[data-url="${url}"]`) : url;

                y = $page.offset().top;

                y -= $('header').innerHeight();
            } else {
                y = url;
            }

            y = y < 0 ? 0 : y;
            y = y > maxY ? maxY : y;

            scrollPos = y;

            let onComplete = function () { Navigation._scrollingTo = false; };

            TweenMax.killTweensOf($window);
            TweenMax.to($window, Navigation._firstLoad ? 0 : .8, {
                scrollTo: { y: y, autoKill: false },
                ease: Power2.easeOut,
                onComplete: onComplete,
                onOverwrite: onComplete,
            });
        },
    },
};
