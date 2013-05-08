/// <reference path="../scripts/melonJS-0.9.7.js" />


var CustomLoading = me.ScreenObject.extend({
    /*---
    
        constructor
        
        ---*/
    init: function () {
        this.parent(true);

        // flag to know if we need to refresh the display
        this.invalidate = false;

        // handle for the susbcribe function
        this.handle = null;

    },

    // call when the loader is resetted
    onResetEvent: function () {
        // melonJS logo
        this.logo1 = new me.Font('century gothic', 32, '#FFB440', 'middle');
        this.logo2 = new me.Font('century gothic', 32, '#FF9A00', 'middle');
        this.logo2.bold();
        this.logo1.textBaseline = this.logo2.textBaseline = "alphabetic";

        // setup a callback
        this.handle = me.event.subscribe(me.event.LOADER_PROGRESS, this.onProgressUpdate.bind(this));

        // load progress in percent
        this.loadPercent = 0;
    },

    // destroy object at end of loading
    onDestroyEvent: function () {
        // "nullify" all fonts
        this.logo1 = this.logo2 = null;
        // cancel the callback
        if (this.handle) {
            me.event.unsubscribe(this.handle);
            this.handle = null;
        }
    },

    // make sure the screen is refreshed every frame 
    onProgressUpdate: function (progress) {
        this.loadPercent = progress;
        this.invalidate = true;
    },

    // make sure the screen is refreshed every frame 
    update: function () {
        if (this.invalidate === true) {
            // clear the flag
            this.invalidate = false;
            // and return true
            return true;
        }
        // else return false
        return false;
    },

    /*---
    
        draw function
      ---*/

    draw: function (context) {

        // measure the logo size
        var logo1_width = this.logo1.measureText(context, "POP THE").width;
        var xpos = (me.video.getWidth() - logo1_width - this.logo2.measureText(context, "BOMB").width) / 2;
        var ypos = me.video.getHeight() / 2;

        // clear surface
        me.video.clearSurface(context, "black");

        // draw the melonJS logo
        this.logo1.draw(context, 'POP THE', xpos, ypos);
        xpos += logo1_width;
        this.logo2.draw(context, 'BOMB', xpos + 5, ypos);

        ypos += this.logo1.measureText(context, "POP THE").height / 2;

        // display a progressive loading bar
        var progress = Math.floor(this.loadPercent * me.video.getWidth());

        // draw the progress bar
        context.strokeStyle = "silver";
        context.strokeRect(0, ypos, me.video.getWidth(), 15);
        context.fillStyle = "#FF9A00";
        context.fillRect(2, ypos + 2, progress - 4, 12);
    }

});