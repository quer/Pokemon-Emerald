function Collision () {

	this.canWark = function(x, y) {
		var eventNr = World.eventReturn(x, y);
		
    	if (eventNr != 0 && eventNr != 2 && eventNr != 5 && eventNr != 3) {
    		return false;
    	}
    	if (player.x == x && player.y == y) {
    		return false;	
    	};
    	var npcs = NpcContainer.getCollisonNpc();
    	for (var i = 0; i < npcs.length; i++) {
    		if (npcs[i].x == x && npcs[i].y == y) {
    			return false;
    		};
    	};
    	return true;
    }
}
var Collision = new Collision();