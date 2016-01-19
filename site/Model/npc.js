function Npc (data, image) {
	this.name = data.name;
	this.movment = data.movment;
	this.map = data.map;
	this.text = data.text;
	this.x = data.movment.start.x;
	this.y = data.movment.start.y;

	this.lastMoved = new Date().getTime();
	this.imageMovingIndex = 0;
	this.looking = this.movment.start.looking;
	this.canMove = true;
	this.image = image;
	this.imagePoss = data.image;
	this.update = function (delta) {
		if (this.canMove && this.movment.type != "standing" && this.map == World.map.name && (delta % 60) === 0) {
			this.findTile();
		}
	}
	this.render = function (canvas) {
		if (this.map == World.map.name) {
			var playerGridSize = {x: 16, y: 21};
			if (this.timeLastMoving+1500 < new Date().getTime()) {
				this.imageMovingIndex = 0;
	    	};
			ctx.drawImage(this.image, playerGridSize.x * this.looking + (this.imagePoss.x*64), playerGridSize.y * this.imageMovingIndex + (this.imagePoss.y*84), playerGridSize.x, playerGridSize.y, this.x * Tile.REAL_SIZE() + World.mapOffset.x, (this.y * Tile.REAL_SIZE()- ((playerGridSize.y*Tile.SCALE()) - Tile.REAL_SIZE() )) + World.mapOffset.y , playerGridSize.x * Tile.SCALE(), playerGridSize.y* Tile.SCALE());
			ctx.font=(8+(2*Tile.SCALE()))+"px Georgia";
	        ctx.textAlign = "center";
	        ctx.fillText(this.name,this.x * Tile.REAL_SIZE() + World.mapOffset.x + ((playerGridSize.x * Tile.SCALE())/2), this.y * Tile.REAL_SIZE() + World.mapOffset.y + Tile.REAL_SIZE() + (2*Tile.SCALE()));
	    };
	}
	this.findTile = function () {
		var moveWay = Math.floor(Math.random() * 3) + 0;
		if (moveWay == 0) {
			if(!this.test(this.x, this.y+1)){
				return this.findTile();
			}else{
				this.y++;
			}
		}else if (moveWay == 1) {
			if(!this.test(this.x, this.y-1)){
				return this.findTile();
			}else{
				this.y--;
			}
		}else if (moveWay == 2) {
			if(!this.test(this.x-1, this.y)){
				return this.findTile();
			}else{
				this.x--;
			}
		}else if (moveWay == 3) {
			if(!this.test(this.x+1, this.y)){
				return this.findTile();
			}else{
				this.x++;
			}
		}
		if (this.looking == moveWay) {
			if (this.imageMovingIndex + 1 > 2) {
				this.imageMovingIndex = 1	
			}else{
				this.imageMovingIndex++;
			}
		}else{
			this.imageMovingIndex = 1;
		}
		this.looking = moveWay;
		return true;
	}
	this.test = function (x, y) {
		if(Collision.canWark(x, y) && 
			x <=  this.movment.start.x + this.movment.radius && 
			x >=  this.movment.start.x - this.movment.radius && 
			y <=  this.movment.start.y + this.movment.radius && 
			y >=  this.movment.start.y - this.movment.radius ){
				return true;
		}else{
			return false;
		}
	}
	this.activeNpc = function () {
		this.canMove = false;
		text.setText(this.text, this);
		if (player.looking == "down") {
			this.looking = 1;
		}else if (player.looking == "up") {
			this.looking = 0;
		}else if (player.looking == "left") {
			this.looking = 3;
		}else {
			this.looking = 2;
		}
		this.imageMovingIndex = 0;
	}
	this.endText = function () {
		this.canMove = true;
	}
}