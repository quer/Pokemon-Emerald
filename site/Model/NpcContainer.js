function NpcContainer () {
	this.container = [];
	this.image = document.getElementById("npc");
	this.load = function () {
		for (var i = 0; i < NpcData.npcs.length; i++) {
			this.container.push(new Npc(NpcData.npcs[i], this.image));
		};
	}
	this.update = function (delta) {
		for (var i = 0; i < this.container.length; i++) {
			this.container[i].update(delta);
		};
	}
	this.renderBeforePlayer = function (canvas) {
		for (var i = 0; i < this.container.length; i++) {
			if (this.container[i].y < player.y)
			{
				this.container[i].render(canvas);
			}
		};
	}
	this.renderAfterPlayer = function (canvas) {
		for (var i = 0; i < this.container.length; i++) {
			if (this.container[i].y >= player.y)
			{
				this.container[i].render(canvas);
			}
		};
	}
	this.getCollisonNpc = function () {
		var CollisonNpcArray = [];
		for (var i = 0; i < this.container.length; i++) {
			if (this.container[i].map == World.map.name) {
				CollisonNpcArray.push({"x": this.container[i].x, "y":this.container[i].y});
			};
		};
		return CollisonNpcArray;
	}
	this.isNpc = function (x, y) {
		for (var i = 0; i < this.container.length; i++) {
			if(this.container[i].x == x && this.container[i].y == y && this.container[i].map == World.map.name) {
				return this.container[i];
			}  
		};
		return null;
	}
}
var NpcContainer = new NpcContainer();
