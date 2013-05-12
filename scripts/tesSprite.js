var tesSprite = me.ObjectEntity.extend(
    {
        init: function(x,y)
        {
            var settings = {};
            settings.spritewidth = 85;
            settings.spriteheight= 85;
            
            this.parent(x,y,settings);
            this.setVelocity(0, 2.5);
            this.gravity = 0;
            this.alwaysUpdate = true;
            
            
            game.texture = new me.TextureAtlas(me.loader.getAtlas("tesAtlas"), me.loader.getImage("tesAtlas"));
            
            this.renderable = game.texture.createSpriteFromName("zombie-a-1-00.png");
            //this.anchorPoint.set(0.5, 1.0);
            //console.log("added");
            me.input.registerMouseEvent("mousedown", this.collisionBox, this.onMouseDown.bind(this));
            
            
        },
        
        onMouseDown: function()
        {
            me.game.remove(this, true);
            console.log("kliked");
        },
        
        update: function()
        {
            this.parent(this);
            
            this.flipX(true);
            this.flipY(true);
            this.vel.y += this.accel.y * me.timer.tick;
            
            if (this.pos.y > me.video.getHeight())
            {
                me.game.remove(this);
                console.log("lewat");
            }
            
            this.computeVelocity(this.vel);
            this.pos.add(this.vel);
            
            return true;
            
        },
        
        onDestroyEvent: function () {
            me.input.releaseMouseEvent("mousedown", this.collisionBox);
            console.log("klik removed");
        }
        
    });