/// <reference path="../scripts/melonJS-0.9.7.js" />

var playButton = me.ObjectEntity.extend(
    {
        init: function (x, y) {
            var settings = {};
            settings.image = "play";
            settings.spritewidth = 40;
            settings.spriteheight = 40;
            this.parent(x, y, settings);
            //this.parent(x, y , me.loader.getImage("play"), 40, 40);

            me.input.registerMouseEvent("mousedown", this.collisionBox, this.onMouseDown.bind(this));

        },

        onMouseDown: function () {
            me.state.change(me.state.PLAY);
            console.log("klik");
            //me.game.remove(this, true);
        },

        onDestroyEvent: function () {
            me.input.releaseMouseEvent("mousedown", this.collisionBox);
            
        }

    });
            
