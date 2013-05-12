var BackgroundLayer = me.ImageLayer.extend(
{
	
	init: function(image)
	{
		name = image;
		width = 320;
		height = 480;
		z = 1;
        ratio = 0;
		
		this.parent(name, width, height, image, z, ratio);
	},

	
});