window.setup = window.setup || {};

/* Disable history controls to stop users from affecting the scores. (Un)comment the following line to toggle. */
Config.history.controls = false; 

/* Hide sidebar initially. */ 
Config.ui.stowBarInitially = true;

setup.toSeconds = function (from, to) {
	/* Determine the number of milliseconds between the two times. */
	var milliseconds = from - to;

	/* Convert the milliseconds into whole seconds, trancating any remainding time. */
	var seconds = Math.abs(Math.trunc(milliseconds / 1000));

	return seconds;
};

function form_submitted() {
	State.variables.submitted = 1;
}

window.form_submitted = form_submitted; 