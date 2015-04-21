console.log(Game.creeps[0])

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");




// Builder
Game.spawns.Spawn1.createCreep(
    [Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
    "Builder1"
);
Memory.creeps.Builder1.role = 'builder';


// Warrior
Game.spawns.Spawn1.createCreep(
	[Game.TOUGH, Game.ATTACK, Game.MOVE, Game.MOVE],
	'Guard1'
);
Game.creeps.Guard1.memory.role = 'guard';



console.log(Game.spawns.Spawn1.spawning.remainingTime);
