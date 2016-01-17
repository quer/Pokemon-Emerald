function Player () {
	this.name = "test"; 
	this.x = 0;//133;
	this.y = 0;//173;
	this.warking = true;
	this.runing = false;
	this.move = {
        up: false,
        down: false,
        right: false,
        left: false
    }
    this.image = document.getElementById("player");
    this.update = function (loops) {
    	if ((loops % 2) === 0 && player.warking) {
			if (player.move.up) {
				Camera.update(0, -1);
		    }else if (player.move.down) {
				Camera.update(0, 1);
		    }else if (player.move.right) {
				Camera.update(1, 0);
		    }else if (player.move.left) {
		        Camera.update(-1, 0);
		    }
		};
		this.x = Camera.heroXOffset;
		this.y = Camera.heroYOffset;
    }
    this.render = function (ctx) {
    	console.log("player render");
    	var playerGridSize = {x: 15, y: 22};
    	
		ctx.drawImage(this.image, playerGridSize.x * 0, playerGridSize.y * 0, playerGridSize.x, playerGridSize.y, this.x * Tile.REAL_SIZE(), (this.y * Tile.REAL_SIZE() - (playerGridSize.y - Tile.REAL_SIZE())) , playerGridSize.x * Tile.SCALE(), playerGridSize.y* Tile.SCALE());
		/*ctx.rect(this.x*Tile.SIZE, this.y*Tile.SIZE, 16, 16);
      	ctx.lineWidth = 1;
      	ctx.stroke();*/
    }
}

var player = new Player();
Camera.heroXOffset = player.x;
Camera.heroYOffset = player.y;
Camera.load();
//x : 133,
//y : 173