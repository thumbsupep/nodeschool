// -> Create a machine object
//    with a property motors = 4
machine = {
	motors: 4
}

// -> Create a robot object
//    with a property friendly = true
robot = {
	friendly: true
}

// -> Create a robby object
robby = {
}

// -> Make machine the prototype of robot
robot.__proto__ = machine; 

// -> Make robot the prototype of robby
robby.__proto__ = robot;

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
