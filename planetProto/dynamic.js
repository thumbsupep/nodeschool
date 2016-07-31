// -> Let's define three objects: 'machine' 'vehicle' and 'robot'
var machine = {}
var vehicle = {}
var robot = {}

// -> Make machine the prototype of vehicle
vehicle.__proto__ = machine; //vehicle inherits properties of machine
// -> Make machine the prototype of robot
robot.__proto__ = machine;
__

// -> What is `vehicle.motors`?
claim(vehicle.motors, undefined);

// -> What is `robot.motors`?
claim(robot.motors, undefined);

// -> Define a 'motors' property on machine, set this to 4
machine.motors = 4;

// -> What is `vehicle.motors` now?
claim(vehicle.motors, 4);

// -> What is `robot.motors`?
claim(robot.motors, 4);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
}
