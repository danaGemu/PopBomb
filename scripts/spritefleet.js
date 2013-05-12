var spritefleet = Object.extend(
{
	/*
	 * constructor
	 */
	init: function()
	{
		// init variables
		this.fps = 0;
		this.maxX = (me.video.getWidth() / 10) - 10;
        this.alwaysUpdate = true;
	},

	/*
	 * update function
	 */
	update: function()
	{
		// every 1/12 second
		if ((this.fps++) % 100 == 0)
		{
			var y = -30; //me.video.getHeight() + 10;
			var x = Number.prototype.random(0, this.maxX) * 10;

			// add an enemy
			me.game.add(me.entityPool.newInstanceOf("tesSprite", x , y), 10);
            console.log("created from pool");
			me.game.sort();
            
            
		}

		return true;
	}
});