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
			if (err) return reject(err);
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

/******************************************************************/

const fs = require("fs");
const zlib = require("zlib");

function zlib(data) {
	return new Promise((resolve, reject) => {
		zlib.gzip(data, (err, result) => {
			if (err) return reject(err);
			resolve(result);
		});	
	})	
}

function readFile(filename, encoding) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, encoding, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
}

readFile("./files/demofile.txt", "utf-8")
	.then(data => {
		// zip the file
		zlib(data)
	    .then(res => console.log(res), 
	          // zip error handling
	          err => console.log("failed to zip", err)	          
	    )}, err => {	// file error handling
	   		console.error("failed to read", err)
	   	}
	)
	
// pausing execution waiting for another promise to resolve
Promise.resolve("done")
	.then(val => {
		console.log(val);
		return new Promise(resolve => {
			setTimeout(() => resolve("done2"), 1000);
		});
	})
	.then(val => console.log(val));

/******************************************************************/

// avoid nesting by returning promise from then
readFile("./files/demofile.txt", "utf-8")
	.then(	// zip the file
		data => {
			return zlib(data);
		},
		err => console.error("failed to read", err)
	)
	.then(	// read the zipped data
	    data => {
	    	console.log(data)
	    },
	    err => console.error(err)
	);

// using catch for error handling
readFile("./files/demofile.txt", "utf-8")
	.then(	// zip the file
		data => return zlib(data)
	)
	.then(	// read the zipped data
	    data => console.log(data)	    
	)
	.catch(err => console.error("failed to zip: ", err));

/******************************************************************/

// promise.all
const util = require("util");
cont fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

let promises = files.map(name => readFile(name, "utf-8"));
Promise.all(promises).then(values => {
	console.log(value);
}).catch(err => console.error("error:", err));

/******************************************************************/

function readFileFake(sleep) {
	return new Promise(resolve => {
		setTimeout(resolve, sleep)
	})
function timeout(sleep) {
	return new Promise((_, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race([readFileFake(1000), timeout(5000)]).then(data => console.log(data)).catch(err => console.log("error: ",err));
Promise.race([readFileFake(5000), timeout(1000)]).then(data => console.log(data)).catch(err => console.log("error: ",err));

/******************************************************************/

function authenticate() {
	console.log("Authenticating");
	return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function pubhlish() {
	console.log("Publishing");
	return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
	return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Proimse.race([publish(), timeout(3000)])
	.then(res => {
		if (res.status === 403) {
			return authenticate()
		}
	})
	.then(_ => console.log("published"))
	.catch(err => {
		if (err === "timeout") {
			console.log("Request timed out");
		} else {
			console.error(err)
		}
	});

// alternative
function safePublish() {
	return publish().then(res => {
		if (res.status === 403) {
			return authenticate()
		}
		return res;
	})
}	
Proimse.race([safePublish(), timeout(3000)])
	.then(_ => console.log("published"))
	.catch(err => {
		if (err === "timeout") {
			console.log("Request timed out");
		} else {
			console.error(err)
		}
	});