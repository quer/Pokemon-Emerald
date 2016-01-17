var Tile = {
	SIZE: 16,
	REAL_SIZE: 16,
	SCALE: function () {
		return this.SIZE / this.REAL_SIZE;
	}
}