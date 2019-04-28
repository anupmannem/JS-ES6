function doAsyncTask(cb) {
	cb();
}

doAsyncTask(_ => console.log(message));
let message = "callback called";
// message not defined error

// Solution - 1
function doAsyncTask(cb) {
	//cb();
	setImmediate(() => {
		console.log("async task calling callback");
		cb();
	})
}
doAsyncTask(_ => console.log(message));
let message = "callback called";

// solution - 2 
function doAsyncTask(cb) {
	process.nextTick(() => {
		console.log("async task calling callback");
		cb();
	})
}
doAsyncTask(() => console.log(message));
let message = "callback called";