function Map () {
	this.data = [];
	//loading world/map
	this.height = TileMaps.fullMap.height;
	this.width = TileMaps.fullMap.width;
	this.image = document.getElementById("fullSheet");
	this.tilesets = TileMaps.fullMap.tilesets;
	this.events = TileMaps.fullMap.events;
	for (var i = 0; i < TileMaps.fullMap.layers.length; i++) {
		console.log("build :" + i);
		var layer = TileMaps.fullMap.layers[i];
		var firstgid = layer.firstgid;
		var endArray = new Array(TileMaps.fullMap.width);
		for (var a = 0; a < endArray.length; a++) {
			endArray[a] = new Array(TileMaps.fullMap.height);
		}
		var index = 0;
		for (var ii = 0; ii < TileMaps.fullMap.height; ii++) {
			for (var iii = 0; iii < TileMaps.fullMap.width; iii++) {
				//console.log(iii + " "+ ii);
				endArray[iii][ii] = (layer.data[index] - firstgid);
				index++;
			};
		};
		this.data.push(endArray);
		/*console.log(endArray.join('\n'));
		console.log("new..");
		console.log(this.data[layer.name].join('\n'));
		*/
	}
	//console.log(this.data["map"].join('\n'));
}