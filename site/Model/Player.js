function Player () {
	this.name = "test"; 
	this.x = 21;//133;
	this.y = 20;//173;
	this.warking = true;
	this.runing = false;
	this.looking = "down";
	this.canMove = true;
	this.move = {
        up: false,
        down: false,
        right: false,
        left: false
    }
    this.image = document.getElementById("player");
    this.update = function (loops) {
    	if ((loops % 5) === 0 && player.warking) {
			this.movePlayer();
		}else if ((loops % 2) === 0 && player.runing) {
			this.movePlayer();
		};
		this.x = Camera.heroXOffset;
		this.y = Camera.heroYOffset;
    }
    this.render = function (ctx) {
    	var lookingIndex = 1;
    	if (this.looking == "down") {
    		lookingIndex = 0;
    	}else if (this.looking == "left") {
    		lookingIndex = 2;
    	}else if (this.looking == "right") {
    		lookingIndex = 3;
    	}
    	var playerGridSize = {x: 15, y: 22};
    	
		ctx.drawImage(this.image, playerGridSize.x * lookingIndex, playerGridSize.y * 0, playerGridSize.x, playerGridSize.y, this.x * Tile.REAL_SIZE(), (this.y * Tile.REAL_SIZE()- ((playerGridSize.y*Tile.SCALE()) - Tile.REAL_SIZE() )) , playerGridSize.x * Tile.SCALE(), playerGridSize.y* Tile.SCALE());
		/*ctx.rect(this.x*Tile.SIZE, this.y*Tile.SIZE, 16, 16);
      	ctx.lineWidth = 1;
      	ctx.stroke();*/
    }
    this.movePlayer = function () {
    	if (player.move.up && this.canMove) {
    		if (this.looking == "up" && this.testUp()) {
				Camera.update(0, -1);
			}else{
				this.looking = "up";
			}
	    }else if (player.move.down && this.canMove) {
			if (this.looking == "down" && this.testDown()) {	
				Camera.update(0, 1);
			}else{
				this.looking = "down";
			}
	    }else if (player.move.right && this.canMove) {
			if (this.looking == "right" && this.testRight()) {
				Camera.update(1, 0);
			}else{
				this.looking = "right";
			}
	    }else if (player.move.left && this.canMove) {
			if (this.looking == "left" && this.testLeft()) {
	    	    Camera.update(-1, 0);
	        }else{
				this.looking = "left";
			}
	    }
    }
    this.doZ = function () {
    	var returnData = false;
    	if (this.looking == "down") {
    		returnData = this.eventLooking(this.x, this.y+1);
    	}else if (this.looking == "left") {
    		returnData = this.eventLooking(this.x-1, this.y);
    	}else if (this.looking == "right") {
    		returnData = this.eventLooking(this.x+1, this.y);
    	}else{
    		returnData = this.eventLooking(this.x, this.y-1);
    	}
    	console.log(returnData);
    	if (returnData.type == "sign") {
    		text.setText(returnData.data);
    		return true;
    	}else{
    		return false;
    	}
    }
    this.doX = function () {
    }
    this.testUp = function () {
    	//console.log(World.eventReturn(this.x, this.y-1)+" up");
    	return this.canWark(World.eventReturn(this.x, this.y-1));
    }
    this.testDown = function () {
    	return this.canWark(World.eventReturn(this.x, this.y+1));
    }
    this.testLeft = function () {
    	return this.canWark(World.eventReturn(this.x-1, this.y));
    }
    this.testRight = function () {
    	return this.canWark(World.eventReturn(this.x+1, this.y));
    }
    this.canWark = function(eventNr) {
    	if (eventNr == 0 || eventNr == 2 || eventNr == 5) {
    		return true;
    	}
    	return false;
    }
    this.eventLooking = function(x, y) {
    	console.log("looking" + x + " " + y);
    	if (typeof World.map.events.sign[x+"_"+y] != "undefined") {
    		return {"type" : "sign", "data": World.map.events.sign[x+"_"+y] };
    	}
    	return false;
    }
}

var player = new Player();
Camera.heroXOffset = player.x;
Camera.heroYOffset = player.y;
Camera.load();
//x : 133,
//y : 173