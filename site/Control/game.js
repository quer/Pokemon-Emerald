var can = document.getElementById('game');
var	ctx = can.getContext('2d');
	
var game = {
	load: function (can) {
		can.width  = Window.REAL_WIDTH;
		can.height = Window.REAL_HEIGHT;
	},
	gameOn: function () {
		
	},
	showMap: function () {
		
	},
	render: function (ctx) {
		ctx.save();
        ctx.translate(-0 + -(Camera.worldXOffset * Tile.SIZE), -0 + -(Camera.worldYOffset * Tile.SIZE));
        // clear the viewport
        ctx.clearRect(-0 + -(Camera.worldXOffset * Tile.SIZE), -0 + -(Camera.worldYOffset * Tile.SIZE), Window.REAL_WIDTH, Window.REAL_HEIGHT);
		

			World.render(ctx, 0 + Camera.worldXOffset, 0 + Camera.worldYOffset);
			player.render(ctx);	

		ctx.restore();
	},
	update: function (loops) {
		player.update(loops);
	}
}
game.load(can);

var fps = 1000 / 30 ;
var loops = 0;
var mainloop = function() {
	loops++;
	
	game.render(ctx);
	game.update(loops);
	
	
};
var gameLoop = setInterval( mainloop, fps);
function gameStopGame () {
	clearInterval(gameLoop);
}


window.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:  
            player.move.left = true;
            break;
        case 39:
            player.move.right = true;
            break;
        case 38:  
            player.move.up = true;
            break;
        case 40:
            player.move.down = true;
            break;
    }
}, false);
window.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 37:  
            player.move.left = false;
            break;
        case 39:
            player.move.right = false;
            break;
        case 38:  
            player.move.up = false;
            break;
        case 40:
            player.move.down = false;
            break;
    }
}, false);