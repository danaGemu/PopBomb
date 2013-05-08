/// <reference path="../scripts/melonJS-0.9.7.js" />

var resources = [

    { name:"title", type:"image", src:"data/img/title.png" },
    { name:"play", type:"image", src:"data/img/play.png" },
    { name:"troll", type:"image", src:"data/sprites/troll.png" }
]

var game = 
    {
        onload: function () {
            if (!me.video.init("PopBomb", 480, 300)) {
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

            //me.entityPool.add(

            me.state.transition("fade", "#000000", 250);

            me.state.change(me.state.MENU);
        }

    };

window.onReady(function () {
    game.onload();
});