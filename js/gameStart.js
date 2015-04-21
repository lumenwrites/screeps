// Workers
//Worker 1
if (game.time == 0)
Game.spawns.Spawn1.createCreep(
    [Game.WORK, Game.CARRY, Game.MOVE],
    "Worker1"
);
Memory.creeps.Worker1.role = 'harvester';


// Worker 2
Game.spawns.Spawn1.createCreep(
    [Game.WORK, Game.CARRY, Game.MOVE],
    "Worker2"
);
Memory.creeps.Worker2.role = 'harvester';


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
