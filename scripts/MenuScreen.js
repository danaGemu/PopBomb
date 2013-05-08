/// <reference path="../scripts/melonJS-0.9.7.js" />

var MenuScreen = me.ScreenObject.extend(
    {
        init: function () {
            this.parent(true, true);
            this.title = null;
            this.play = null;
        },

        onResetEvent: function () {
            this.title = me.loader.getImage("title");
            this.play = new playButton(140,240);
            

            me.game.add(this.play);
        },

        draw: function (context) {
            context.drawImage(this.title, (me.video.getWidth() / 2 - this.title.width / 2), 100);
            //this.play.draw(context);
        },

        onDestroyEvent: function () {
            me.game.remove(this.title);
            me.game.remove(this.play, true);
        }
    });

