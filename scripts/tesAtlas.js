/// <reference path="../scripts/melonJS-0.9.7.js" />

var tesAtlas = me.ObjectEntity.extend(
    {
        init: function (x, y) {
            var settings = {};
            settings.spritewidth = 85;
            settings.spriteheight = 85;

           this.parent(x, y, settings);

            game.texture = new me.TextureAtlas(me.loader.getAtlas("tesAtlas"), me.loader.getImage("tesAtlas"));

            this.renderable = game.texture.createAnimationFromName([
               "zombie-a-0-00.png", "zombie-a-0-01.png", "zombie-a-0-02.png",
               "zombie-a-0-03.png", "zombie-a-0-04.png", "zombie-a-0-05.png",
               "zombie-a-1-00.png", "zombie-a-1-01.png"
            ]);

            this.renderable.addAnimation("nice_walk", [
               "zombie-a-0-00.png", "zombie-a-0-01.png", "zombie-a-0-02.png",
               "zombie-a-0-03.png", "zombie-a-0-04.png", "zombie-a-0-05.png",
               "zombie-a-1-00.png", "zombie-a-1-01.png"
            ], 10);

            this.renderable.setCurrentAnimation("nice_walk");
            this.renderable.update();

            //this.anchorPoint.set(0.5, 1.0);
        },

        update: function () {
            
            //this.updateMovement();

            return this.parent();
        }
    });