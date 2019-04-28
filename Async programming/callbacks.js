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

/****************************************************************/

const fs = require('fs');

fs.readfile("./files/demofile.txt", {encoding: "utf-8"}, (err, data) => {
	if(err) {
		// next(err); // can pass up the chain
		// console.error(err) // can log and continue
		// return;
		// throw err; // can error and exit
	} else {
		console.log(data);
	}
});

// error handling, passing error up the chain
function readFileThenDo(next) {
	fs.readFile("./blah.nofile", (err, data) => {
		next(err, data);
	});
}

readFileThenDo((err,data) => {
	if(err) {
		console.err(err)
	} else{
		console.log(data);	
	}	
});

// alternative
function readFileThenDo(next) {
	fs.readFile("./blah.nofile", (err, data) => {
		if(err) {
			next(err);
		} else {
			next(null, data);		
		}	
	});
}
readFileThenDo((err,data) => {
	if(err) {
		console.err(err)
	} else{
		console.log(data);	
	}	
});
