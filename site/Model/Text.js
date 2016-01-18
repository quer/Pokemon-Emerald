function Text () {
	this.active = false;
	this.image = document.getElementById("text");
	this.textArray = [];
	this.activeIndex = 0;
	this.npc = null;
	this.arrowMovmentIndex = 0;
	this.arrowMovmentTime = new Date().getTime();
	this.render = function (ctx) {
		if (this.active) {
	    	//console.log("Text render");
	    	var offset = {
	    		top: 10,
	    		bottom: 10,
	    		right: 10,
	    		left: 10
	    	}
			var startX = Camera.worldXOffset*Tile.REAL_SIZE()+offset.left;
			var startY = ((Camera.worldYOffset*Tile.REAL_SIZE()) + (Window.SCALE_HEIGHT() / 3) * 2)+offset.top;
			//left top coner
			ctx.drawImage(this.image, 0, 0, 6, 6, startX, startY , 6*Window.SCALE(), 6*Window.SCALE());
			var repeatDown = ((Camera.worldYOffset + (Window.SCALE_HEIGHT() / Tile.REAL_SIZE()))*Tile.REAL_SIZE()) - (((6*Window.SCALE()) * 2 ) + startY + offset.bottom);
			//left loop
			for (var i = 0; i < repeatDown; i++) {
				//console.log("do");
				ctx.drawImage(this.image, 0, 6, 6, 1, startX, startY+(6*Window.SCALE())+i , 6*Window.SCALE(), 1*Window.SCALE());
			}
			//left bottom conor
			ctx.drawImage(this.image, 0, 7, 6, 6, startX, startY+(6*Window.SCALE())+repeatDown , 6*Window.SCALE(), 6*Window.SCALE());	
			//bottom loop
			var repeatSideWays = ((Camera.worldXOffset + (Window.SCALE_WIDTH() / Tile.REAL_SIZE()))*Tile.REAL_SIZE())  - (((6*Window.SCALE()) * 2 ) + startX + offset.right);
			for (var i = 0; i < repeatSideWays; i++) {
				//console.log("do");
				ctx.drawImage(this.image, 6, 7, 1, 6, startX+(6*Window.SCALE())+i, startY+(6*Window.SCALE())+repeatDown , 1*Window.SCALE(), 6*Window.SCALE());
			}
			// top loop
			for (var i = 0; i < repeatSideWays; i++) {
				//console.log("do");
				ctx.drawImage(this.image, 6, 0, 1, 6, startX+(6*Window.SCALE())+i, startY , 1*Window.SCALE(), 6*Window.SCALE());
			}
			//right top conor
			ctx.drawImage(this.image, 7, 0, 6, 6, startX+(6*Window.SCALE())+repeatSideWays, startY , 6*Window.SCALE(), 6*Window.SCALE());
			//right loop
			for (var i = 0; i < repeatDown; i++) {
				//console.log("do");
				ctx.drawImage(this.image, 7, 6, 6, 1, startX+(6*Window.SCALE())+repeatSideWays, startY+(6*Window.SCALE())+i , 6*Window.SCALE(), 1*Window.SCALE());
			}
			//right bottom conor
			ctx.drawImage(this.image, 7, 7, 6, 6, startX+(6*Window.SCALE())+repeatSideWays, startY+(6*Window.SCALE())+repeatDown , 6*Window.SCALE(), 6*Window.SCALE());
			//center box
			ctx.fillStyle="#FFF";
			ctx.fillRect(startX+(6*Window.SCALE()),startY+(6*Window.SCALE()),repeatSideWays,repeatDown);
			//text til box
			ctx.fillStyle="#000";
			ctx.font="20px Georgia";
			ctx.textAlign = "left";
			ctx.fillText(this.textArray[this.activeIndex],startX+(6*Window.SCALE())+(10*Window.SCALE()),startY+(6*Window.SCALE())+(10*Window.SCALE()));
			//arrow
			if (this.arrowMovmentTime+100 < new Date().getTime()) {
				if (this.arrowMovmentIndex + 1 > 6) {
					this.arrowMovmentIndex = 0;
				}else{
					this.arrowMovmentIndex++;
				}
				this.arrowMovmentTime = new Date().getTime();
			};
			if (this.activeIndex+1 != this.textArray.length) {
				ctx.drawImage(this.image, 0, 13, 7, 6, startX+(6*Window.SCALE())+repeatSideWays-(20*Window.SCALE()), startY+(6*Window.SCALE())+repeatDown-(10*Window.SCALE()) + this.arrowMovmentIndex , 7*Window.SCALE(), 6*Window.SCALE());
			};
		}
	}
	this.setText = function (textArray, npc) {
		if (!this.active) {
			this.textArray = textArray;
			this.active = true;
			this.activeIndex = 0;
			player.canMove = false;
			if (typeof npc != "undefined") {
				this.npc = npc;
			};
		};
	}
	this.doZ = function () {
		if (this.activeIndex + 1 < this.textArray.length && this.active) {
			this.activeIndex++;
			console.log("text doZ");
			return true;
		}else if(this.active){
			this.active = false;
			player.canMove = true;
			if (this.npc != null) {
				
				this.npc.endText();
				this.npc = null;
			};
			return true;
		}else {
			console.log("text no doZ");
			
			return false;
		}

	}
}
var text = new Text();