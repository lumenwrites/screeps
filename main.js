// **************** Main ****************
var spawn = require('spawn');
var spawningUnit = 1;
spawn(spawningUnit);

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
