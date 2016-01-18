function Rooms () {
	this.container = [];
	this.load = function () {
		this.container.push(new Map(TileMaps.fullMap));
		this.container.push(new Map(TileMaps.store));
		this.container.push(new Map(TileMaps.pokaHeal));
		this.container.push(new Map(TileMaps.pokaHeal_02));
		this.container.push(new Map(TileMaps.mine_01));
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
