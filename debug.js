module.exports = function () {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    for(var i in Game.creeps) {
	console.log("Creep: " + Game.creeps[i].name + " i " + i);
    }
    console.log("Creeps Length: " + Game.creeps.length);
}
