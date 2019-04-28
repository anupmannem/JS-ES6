// creating a promise
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async work complete");
		resolve();
	}, 1000);
});

// returning a promise
function doAsyncTask() {
	let error = false;
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Async work complete");
			if (error) {
				reject("error");
			} else {
				resolve("done");	
			}		
		}, 1000);
	});
	return promise;
}

// handling resolve
doAsyncTask().then((val) => console.log(val));
// then can take 2 arguments, second one being _error_ handler
doAsyncTask().then(
    (val) => console.log(val),
    (err) => console.log(err)
);

/******************************************************************/

const fs = require("fs");

function readFile(filename, encoding) {
	fs.readFile(filename, encoding, (err, data) => {
		
	});	
}
readFile("./files/demofile.txt", "utf-8").then();                                              

// promise version of the above
function readFile(filename, encoding) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, encoding, (err, data) => {
			if(err) return reject(err);
			resolve(data);			
		});	
	})	
}
readFile("./files/demofile.txt", "utf-8").then(
    val => console.log(val),
    err => consol.error(err)
);

// util.promisify() another option to convert into promise verision
const util = require("util");
const readFile = util.promisify(fs.readFile);
