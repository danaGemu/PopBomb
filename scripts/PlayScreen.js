/// <reference path="../scripts/melonJS-0.9.7.js" />

var PlayScreen = me.ScreenObject.extend(
    {
        init: function () {
            this.parent(true, true);
            this.title = null;
            this.play = null;
            this.bg = null;
            this.sprote = null;
            this.sprote2 = null;
            this.timePassed = null;
            
            this.munculZombie = false;
            
        },

        onResetEvent: function () {
            this.title = me.loader.getImage("troll");
            
            this.play = new tesAtlas(150, 300);
            me.game.add(this.play, 2);
            
            this.bg = new BackgroundLayer("bg");
            me.game.add(this.bg, 1);
            
            //this.sprote = new tesSprite(50, 30);
            //me.game.add(this.sprote, 3);
            
            this.sprote = new spritefleet();
            me.game.add(this.sprote, 10);
            
            this.sprote2 = new spritefleet2();
            me.game.add(this.sprote2, 10);
            
            me.game.sort();

            //me.game.add(this.play);
            console.log("enter playscreen");
            
        },

        draw: function (context) {
            context.drawImage(this.title, (me.video.getWidth() / 2 - this.title.width / 2), 100);
            
        },
        

        onDestroyEvent: function () {
            me.game.remove(this.title);
            me.game.remove(this.play, true);
        }
    });

