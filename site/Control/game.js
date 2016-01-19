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
        Rooms.load();
		World.load(player.mapName);
        Camera.heroXOffset = player.x;
		Camera.heroYOffset = player.y;
		Camera.load();
        NpcContainer.load();
	},
	gameOn: function () {
		
	},
	showMap: function () {
		
	},
	render: function (ctx) {
        var start = Date.now();
        ctx.fillStyle="black";
		ctx.save();
        ctx.translate(-0 + -(Camera.worldXOffset * (Tile.REAL_SIZE())), -0 + -(Camera.worldYOffset * (Tile.REAL_SIZE())));
        // clear the viewport
        ctx.clearRect(-0 + -(Camera.worldXOffset * (Tile.REAL_SIZE())), -0 + -(Camera.worldYOffset * (Tile.REAL_SIZE())), Window.SCALE_WIDTH(), Window.SCALE_HEIGHT());
		

			World.render(ctx, 0 + Camera.worldXOffset, 0 + Camera.worldYOffset , 0);
			NpcContainer.renderBeforePlayer(ctx);
            player.render(ctx);
            NpcContainer.renderAfterPlayer(ctx);
            //the top of building and the map
            World.render(ctx, 0 + Camera.worldXOffset, 0 + Camera.worldYOffset , 1);

			text.render(ctx);
		ctx.restore();

        var end = Date.now();
        ctx.font = '16px sans-serif'
        ctx.textAlign = 'center';
        ctx.fillText('Rendered in ' + (end - start) + ' ms', can.width / 2, can.height - 20);
	},
	update: function (delta) {
		player.update(delta);
        NpcContainer.update(delta);
	}
}
game.load(can, ctx);

var fps = 1000 / 30 ;
var delta = 0;
var mainloop = function() {
	delta++;
	
	game.render(ctx);
	game.update(delta);
	
	
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