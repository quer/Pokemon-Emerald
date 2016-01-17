var can = document.getElementById('game');
var	ctx = can.getContext('2d');
	
var game = {
	load: function (can, ctx) {
		can.width  = Window.SCALE_WIDTH();
		can.height = Window.SCALE_HEIGHT();
		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;
		Camera.heroXOffset = player.x;
		Camera.heroYOffset = player.y;
		Camera.load();
	},
	gameOn: function () {
		
	},
	showMap: function () {
		
	},
	render: function (ctx) {
		ctx.save();
        ctx.translate(-0 + -(Camera.worldXOffset * (Tile.REAL_SIZE())), -0 + -(Camera.worldYOffset * (Tile.REAL_SIZE())));
        // clear the viewport
        ctx.clearRect(-0 + -(Camera.worldXOffset * (Tile.REAL_SIZE())), -0 + -(Camera.worldYOffset * (Tile.REAL_SIZE())), Window.REAL_WIDTH(), Window.REAL_HEIGHT());
		

			World.render(ctx, 0 + Camera.worldXOffset, 0 + Camera.worldYOffset);
			player.render(ctx);	
			text.render(ctx);
		ctx.restore();
	},
	update: function (loops) {
		player.update(loops);
	}
}
game.load(can, ctx);

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
        case 90:
        	if(text.doZ()){

        	}else if(player.doZ()){

        	}
            
            break;
        case 88:
            player.doX();
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