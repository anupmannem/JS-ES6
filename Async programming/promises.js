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

