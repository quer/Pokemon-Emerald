function World () {
	this.width = 320;
	this.height = 240;
	this.scale = 2.0;
	this.map = new Map();
	this.render = function (canvas, xRender, yRender){ // x og y startpunkter
		//console.log("y: "+ yRender + " x: "+ xRender);
		var offset = 0;
		var xStart = (xRender - offset);
		var yStart = (yRender - offset);
		//console.log("Start : y: "+ yStart + " x: "+ xStart);
		var xEnd = Math.ceil(Window.REAL_WIDTH() / Tile.SIZE) + xStart + (offset * 2);
		var yEnd = Math.ceil(Window.REAL_HEIGHT() / Tile.SIZE) + yStart + (offset * 2);
		//console.log("End : y: "+ yEnd + " x: "+ xEnd);
		//console.log("map:" + this.map.data.length + " : " + this.map.data[0].length + " : " + this.map.data[0][0].length);
		for (var x = xStart; x < xEnd; x++) {
			for (var y = yStart; y < yEnd; y++) {
				var data = this.map.data[0][x][y];
				//console.log("data: "+ data);
				var image = this.getTileplace(data, this.map.tilesets.width, this.map.tilesets.height);
				canvas.drawImage(this.map.image, image.x * Tile.SIZE, image.y * Tile.SIZE, Tile.SIZE, Tile.SIZE, x * Tile.REAL_SIZE(), y * Tile.REAL_SIZE(), Tile.REAL_SIZE(), Tile.REAL_SIZE());
			};		
		};
	}
	this.getTileplace = function (tileNr, tilesAmountx, tilesAmounty) {
		//var all = tilesAmountx * tilesAmounty;
	    //tileNr = tileNr -1;
	    var returnY = Math.floor(tileNr / tilesAmountx);
	    var returnX =  tileNr - (returnY * tilesAmountx);
	    return {x: returnX, y: returnY};
	}
	this.eventReturn = function (x, y) {
		return this.map.data[1][x][y];
	}
}
var World = new World();