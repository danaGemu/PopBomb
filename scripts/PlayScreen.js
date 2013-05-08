/// <reference path="../scripts/melonJS-0.9.7.js" />

var PlayScreen = me.ScreenObject.extend(
    {
        init: function () {
            this.parent(true, true);
            this.title = null;
            this.play = null;
        },

        onResetEvent: function () {
            this.title = me.loader.getImage("play");
            //this.play = new playButton(240, 150);
            //this.play.x = 480 / 2;

            //me.game.add(this.play);
            console.log("enter playscreen");
        },

        draw: function (context) {
            context.drawImage(this.title, (me.video.getWidth() / 2 - this.title.width / 2), 100);
            //this.play.draw(context);
        },

        onDestroyEvent: function () {
            //me.game.remove(this.title);
            me.game.remove(this.play);
        }
    });

