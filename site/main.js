var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var tileSheet_0_1 = document.getElementById('fullSheet');

function getTileplace (tileNr, tilesAmountx, tilesAmounty) {
	//var all = tilesAmountx * tilesAmounty;
    tileNr = tileNr -1;
    var returnY = Math.floor(tileNr / tilesAmountx);
    var returnX =  tileNr - (returnY * tilesAmountx);
    return {x: returnX, y: returnY};
}
function getMap() {
	var offset = {x: (133 - (Window.REAL_WIDTH/Tile.SIZE) / 2), y: (173 - (Window.REAL_HEIGHT/Tile.SIZE) / 2)};
	var data = TileMaps.fullMap;
	var endArray = new Array(data.width);
	for (var i = 0; i < endArray.length; i++) {
		endArray[i] = new Array(data.height);
	}
	var index = 0;
	var sheetAmounty =  (data.tilesets.height);
	var sheetAmountx = (data.tilesets.width);
	console.log("tilesAmount"+sheetAmounty + "tilesAmountx"+sheetAmountx );
	for (var ii = 0; ii < data.height; ii++) {
		for (var i = 0; i < data.width; i++) {
			endArray[i][ii] = data.layers[0].data[index];
			var tilePlace = getTileplace(endArray[i][ii], sheetAmountx, sheetAmounty);
			//console.log(tilePlace);
			ctx.drawImage(tileSheet_0_1, tilePlace.x*16, tilePlace.y*16, 16, 16, (i*16) - (offset.x * 16), (ii*16) - (offset.y * 16), 16, 16);
			index++;
		};
	};
	return endArray;
}
getMap();