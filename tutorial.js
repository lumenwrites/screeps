// **************** VIDEO 00 ****************
// About screeps. What it is and why it's cool.
// Make it last.

// **************** VIDEO 01 ****************
// Create Creeps

// Select Spawn
var spawn = Game.spawns.Spawn1;

// Create new creep
// createCreep(body, name)
spawn.createCreep(
    [Game.WORK, Game.CARRY, Game.MOVE],
    "Worker1"
);


Memory.creeps.Worker1.role = 'harvester';
Memory.creeps.Worker2.role = 'harvester';

// Body - 1-30 elements.
// WORK
// MOVE
// CARRY
// ATTACK
// RANGED_ATTACK
// HEAL
// TOUGH

// Move to the flag


// **************** VIDEO 02 ****************
// Harvest Energy

// Move
// find(type, [opts])
// moveTo(target, [opts])
var creep = Game.creeps.Worker1;
var target = creep.pos.findNearest(Game.SOURCES_ACTIVE);
if (target) {
    creep.moveTo(target);
}

// Harvest energy
if (creep.energy < creep.energyCapacity) {
    // As long as creep's energy isn't full - move to the energy source
    creep.moveTo(target);
    // And harvest energy
    creep.harvest(target);
} else {
    // Once creep is full - return to the spawn
    creep.moveTo(spawn);
    // And transfer it to the spawn
    creep.transferEnergy(spawn);
}

// **************** VIDEO 03 ****************
// Command Several Creeps and Modules

// Harvester Module
module.exports = function (creep) {

    if(creep.energy < creep.energyCapacity) {
	var target = creep.pos.findNearest(Game.SOURCES_ACTIVE);

	creep.moveTo(target);
	creep.harvest(target);
    }
    else {
	creep.moveTo(spawn);
	creep.transferEnergy(spawn);
    }
}

// Main Module
var harvester = require('harvester');

for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    harvester(creep);
}

// **************** VIDEO 04 ****************
// Build things

// Create a builder
Game.spawns.Spawn1.createCreep(
    [Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
    "Builder1"
);

Memory.creeps.Builder1.role = 'builder';

// Builder Module
module.exports = function (creep) {
    if(creep.energy == 0) {
	creep.moveTo(Game.spawns.Spawn1);
	Game.spawns.Spawn1.transferEnergy(creep);
    }
    else {
	var targets = creep.room.find(Game.CONSTRUCTION_SITES);
	if(targets.length) {
	    creep.moveTo(targets[0]);
	    creep.build(targets[0]);
	}
    }
}

// Main Module
var harvester = require('harvester');
var builder = require('builder');

for(var name in Game.creeps) {
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester') {
	harvester(creep);
    }

    if(creep.memory.role == 'builder') {
	builder(creep);
    }
}

// **************** VIDEO 05 ****************
// Create Guard
Game.spawns.Spawn1.createCreep(
	[Game.TOUGH, Game.ATTACK, Game.MOVE, Game.MOVE],
	'Guard1'
);
Game.creeps.Guard1.memory.role = 'guard';


// Guard Module
module.exports = function (creep) {
    var targets = creep.room.find(Game.HOSTILE_CREEPS);
    if(targets.length) {
	creep.moveTo(targets[0]);
	creep.attack(targets[0]);
    }
}

// Main Module
var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');

for(var name in Game.creeps) {
    var creep = Game.creeps[name];

    if(creep.memory.role == 'harvester') {
	harvester(creep);
    }

    if(creep.memory.role == 'builder') {
	builder(creep);
    }

    if(creep.memory.role == 'guard') {
	guard(creep);
    }
}
