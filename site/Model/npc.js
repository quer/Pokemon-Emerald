function Npc (data, image) {
	this.name = data.name;
	this.movment = data.movment;
	this.map = data.map;
	this.text = data.text;
	this.x = data.movment.start.x;
	this.y = data.movment.start.y;

	this.lastMoved = new Date().getTime();
	this.imageMovingIndex = 0;
	this.looking = 0;
	this.canMove = true;
	this.image = image;
	this.update = function (delta) {
		if (this.canMove && (delta % 60) === 0) {
			this.findTile();
		}
	}
	this.render = function (canvas) {
		var playerGridSize = {x: 16, y: 21};
		if (this.timeLastMoving+1500 < new Date().getTime()) {
			this.imageMovingIndex = 0;
    	};
		ctx.drawImage(this.image, playerGridSize.x * this.looking, playerGridSize.y * this.imageMovingIndex, playerGridSize.x, playerGridSize.y, this.x * Tile.REAL_SIZE() + World.mapOffset.x, (this.y * Tile.REAL_SIZE()- ((playerGridSize.y*Tile.SCALE()) - Tile.REAL_SIZE() )) + + World.mapOffset.y , playerGridSize.x * Tile.SCALE(), playerGridSize.y* Tile.SCALE());
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
	}
	this.endText = function () {
		this.canMove = true;
	}
}