// Global scope
let forecast = "Sunny";
function advice() {
    console.log("the weather will be " + forecast);
}

// local scope
let tempC = 30;
function advice(tempC) {
    let tempF = tempC * 1.8 + 32;
    console.log(tempF + " deg F and " + forecast);
}
console.log(tempF); // error

// Nested functions
function updateClicks() {
    const button = this.id;
    clicks[button] = clicks[button] + 1 || 1;

    // inner function
    function reportClicks() {
        const report = [button, clicks];
        console.log(...report);
    }
    reportClicks();
}

// closure
function updateClicks() {
	const choices = [];
	function addChoice(newChoice) {
		choices.push(newChoice);
	}
	return addChoice;
}
let updateColors = updateClicks();

function updateClicks2() {
	const choices = [];
	function addChoice(newChoice) {
		choices.push(newChoice);
	}
	return addChoice;
}
let updateTextures = updateClicks2();

// code becomes redundant
// reusablitiy is the key with closures
let updateColors = updateClicks();
let updateTextures = updateClicks();


