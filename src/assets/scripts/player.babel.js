/**
 * Main code
 */

let Players = {};

!(function (window, document, undefined) {
    'use strict';

    let $window = $(window);
    let $document = $(document);
    let $body = $('body');

    $document.on('video.apply', function () {
        $('[data-player-id]:not([data-player-initied])').each(function () {
            if (!$(this).parents('.slick-cloned').length && typeof YT != 'undefined') {
                let playerID = $(this).attr('data-player-id');
                let videoID = $(this).attr('data-video-id');

                $(this).attr('data-player-initied', 'true');

                Players[playerID] = new Player(this, videoID);

                Players[playerID].on('playing', function () {
                    $document.trigger('video.playing', [playerID, videoID]);

                    let $player = this.$el;

                    $('.cover[data-player-play="' + playerID + '"]').hide();
                });

                Players[playerID].on('paused', function () {
                    $document.trigger('video.paused', [playerID, videoID]);

                    var $player = this.$el;

                    $('.cover[data-player-play="' + playerID + '"]').show();
                });

                Players[playerID].on('ended', function () {
                    $document.trigger('video.ended', [playerID, videoID]);

                    this.trigger('paused');
                });
            }
        });
    });

    $document.on('preloaded.after', function () {
        Player.load(function () {
            $document.trigger('video.apply');
        });

        $body.on('click', '[data-player-play]', function () {
            var playerID = $(this).attr('data-player-play');

            $document.trigger('video.play', [playerID]);

            for (var i in Players) {
                try {
                    Players[i].pause();
                } catch (e) { }
            }

            Players[playerID].play();
        });
    });
})(window, document, undefined);
