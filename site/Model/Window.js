var Window = {
	NORMAL_WIDTH: 320,
	NORMAL_HEIGHT: 240,
	REAL_WIDTH: 672,//700,
	REAL_HEIGHT: 480,//500,
	SCALE_WIDTH: function () {
			return this.REAL_WIDTH / this.NORMAL_WIDTH;
	},
    SCALE_HEIGHT: function () {
            return this.REAL_HEIGHT / this.NORMAL_HEIGHT;
    }	
}