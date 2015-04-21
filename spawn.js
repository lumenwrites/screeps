module.exports = function (spawningUnit) {
    if (Game.spawns.Spawn1.spawning === null) {
	console.log("Building Unit " + spawningUnit);
	switch (spawningUnit) {
	case 1: // Create Worker 1
	    Game.spawns.Spawn1.createCreep(
		[Game.WORK, Game.CARRY, Game.MOVE]);
	    Memory.creeps[Memory.creeps.length - 1].role = 'harvester';
	    break;
	// case 2: // Create Worker 2
	//     Game.spawns.Spawn1.createCreep(
	// 	[Game.WORK, Game.CARRY, Game.MOVE]);
	//     Memory.creeps[Memory.creeps.length - 1].role = 'harvester';
	//     break;
	// case 3: // Create Builder
	//     Game.spawns.Spawn1.createCreep(
	// 	[Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE]);
	//     Memory.creeps.Builder1.role = 'builder';
	//     break;
	// case 4: // Create Guard
	//     Game.spawns.Spawn1.createCreep(
	// 	[Game.TOUGH, Game.ATTACK, Game.MOVE, Game.MOVE]);
	//     Game.creeps.Guard1.memory.role = 'guard';
	//     break;
	default: spawningUnit = 1;
	}
	spawningUnit  += 1;
    }
}
