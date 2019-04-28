// promise based version
const doAsyncTask = () => Promise.resolve("done");
doAsyncTask().then(val => console.log(val));
console.log("here");
// here
// done

// using async await
const doAsyncTask = () => Promise.resolve("done");
async function asim() {
	let value = await doAsyncTask();
	console.log(value);
}
asim();

// writing as IIfE
const doAsyncTask = () => Promise.resolve("done");
(async function(){
	let value = await doAsyncTask();
	console.log(value);
})();

// async await blocking
const doAsyncTask = () => Promise.resolve("1");
(async function() {
	let value = await doAsyncTask();
	console.log(value);
	console.log("2");
})();	// 1, 2 - blocking

// return promise for non-blocking
const doAsyncTask = () => Promise.resolve("1");
(async function() {
	doAsyncTask().then(console.log);
	console.log("2");
})();	// 2, 1 - non-blocking

// return from async await
const doAsyncTask = () => Promise.resolve("1");
let asyncFunction = async function() {
	let value = await doAsyncTask();
	console.log(value);
	console.log("2");
	return "3";
};
asyncFunction().then(val => console.log(val)); // val = 3
// 1, 2, 3

// handling errors
const doAsyncTask = () => Promise.reject("error");
const asyncFunction = async function() {
	try {
		const value = await doAsyncTask();
	} catch(e) {
		console.error("caugth error: ", e);
		return;
	}
};
asyncFunction();
