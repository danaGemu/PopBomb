/// <reference path="../scripts/melonJS-0.9.7.js" />

var resources = [

    { name: "title", type: "image", src: "data/img/title.png" },
    { name: "play", type: "image", src: "data/img/play.png" },
    { name: "troll", type: "image", src: "data/sprites/troll.png" },
    { name: "bg", type: "image", src: "data/img/bg.png" },

    { name: "tesAtlas", type: "image", src: "data/sprites/tesAtlas.png" },
    { name: "tesAtlas", type: "tps", src: "data/sprites/tesAtlas.json" }
]

var game = 
    {
        onload: function () {
            if (!me.video.init("PopBomb", 320, 480, true, 'auto', true)) {
                alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
                return;
            }


            me.audio.init("ogg, mp3, m4a, wav");

            me.loader.onload = this.loaded.bind(this);
            me.loader.preload(resources);

            me.state.set(me.state.LOADING, new CustomLoading());
            me.state.change(me.state.LOADING);

        },

        loaded: function () {
            me.state.set(me.state.MENU, new MenuScreen());
            me.state.set(me.state.PLAY, new PlayScreen());
            //me.state.set(me.state.GAMEOVER, new GameOverScreen());
            
            me.entityPool.add("tesSprite", tesSprite, true);
            me.entityPool.add("tes2", tesSprite2, true);

            //me.entityPool.add(

            me.state.transition("fade", "#000000", 250);

            me.state.change(me.state.MENU);
        }

    };

window.onReady(function () {
    game.onload();
});