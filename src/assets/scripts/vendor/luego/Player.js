var EventHandler = (function(){
    var EventHandler = function(context){
        this.context = context;
        this.events = {};
    };

    EventHandler.prototype.on = function(name, fn){
        if (!this.events[name]) {
            this.events[name] = [fn];
        } else {
            this.events[name].push(fn);
        }
    };

    EventHandler.prototype.trigger = function(name, params){
        if (this.events[name]) {
            for (var i = 0; i < this.events[name].length; i++) {
                this.events[name][i].apply(this.context, [params || null]);
            }
        }
    };

    return {
        init: function (O) {
            O.on = function (name, fn) {
                if (!this._event) { this._event = new EventHandler(this); }

                this._event.on(name, fn);
            };

            O.trigger = function (name, params, retroative) {
                if (!this._event) { this._event = new EventHandler(this); }

                this._event.trigger(name, params);

                if (retroative && this.parent){
                    this.parent.trigger(name, params);
                }
            };
        }
    };
})();

var Player = (function($, EventHandler, window, document, undefined) {
    function Player (el, videoID) {
        var _this       = this;
        var $player;

        _this.$el       = $(el);
        _this.videoID   = videoID;

        Object.defineProperty(_this, 'duration', {
            get: function () {
                return _this.player.getDuration();
            }
        });


        $player = $('<div>', {attr: {id: videoID}});
        $player.appendTo(el);

        _this.player = new YT.Player($player.get(0), {
            height: '100%',
            width: '100%',
            videoId: videoID,
            playerVars: { 'showinfo': 0, 'rel': 0, 'iv_load_policy': 3 },
            events: {
                onReady: function (e) {

                },
                onStateChange: function (e) {
                    switch (e.data) {
                        case YT.PlayerState.PLAYING:    _this.trigger('playing'); break;
                        case YT.PlayerState.PAUSED:     _this.trigger('paused'); break;
                        case YT.PlayerState.ENDED:      _this.trigger('ended'); break;
                        case YT.PlayerState.BUFFERING:  _this.trigger('buffering'); break;
                        case YT.PlayerState.CUED:       _this.trigger('cued'); break;
                    }
                }
            }
        });
    }

    Player.prototype.play = function () {
        this.player.playVideo();
    };

    Player.prototype.pause = function () {
        this.player.pauseVideo();
    };

    Player.prototype.seek = function (n) {
        this.player.seekTo(n);
    };

    Player.load = function(cb) {
        window.onYouTubeIframeAPIReady = function() {
            cb();
        };

        $.getScript('https://www.youtube.com/iframe_api');
    };

    EventHandler.init(Player.prototype);

    return Player;
})(jQuery, EventHandler, window, document, undefined);
