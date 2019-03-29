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
