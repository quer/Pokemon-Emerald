function Rooms () {
	this.container = [];
	this.load = function () {
		for (var key in TileMaps) {
			this.container.push(new Map(TileMaps[key]));
		};
	}
	this.find = function (name) {
		for (var i = 0; i < this.container.length; i++) {
			if(this.container[i].name == name)
				return this.container[i];
		};
		return null;
	}
	this.goRoom = function (data) {
		var map = 0;
	},
	this.render = function (canvas) {
		// body...
	}
}
var Rooms = new Rooms();
