const fetch = require("node-fetch");

function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    });
}

showGitHubUser("anupmannem");

// convert the above function to async await
async function showGitHubUser(handle) {
  // get the url
  const url = `https://api.github.com/users/${handle}`;
  // await to fetch from url
  const response = await fetch(url);
  // await response and conver to json
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

// refactoring the above code
async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return (user = await response.json());
}
showGitHubUser("anupmannem").then(user => {
  console.log(user.name);
  console.log(user.location);
});

// with function expression
const fetchGitHubUser = async handle => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return (user = await response.json());
};
fetchGitHubUser("anupmannem").then(user => {
  console.log(user.name);
  console.log(user.location);
});

// IIFE pattern
(async () => {
  const user = await fetchGitHubUser("anupmannem");
  console.log(user.name);
  console.log(user.location);
})();

// converting to class
class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.githubcom/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const client = new GitHubApiClient();
  const user = await client.fetchUser("anupmannem");
  console.log(user.name);
  console.log(user.location);
})();

// error handling
async function fetchGitHubUser() {
  const url = `https://api.githubcom/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(body.message);
  }
  return body;
}

fetchGitHubUser("idonotexist")
  .then(user => console.log(user))
  .catch(err => console.error(`error: ${err.message}`));

// async await with try-catch blocks
async function showGitHubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`error: ${err.message}`);
  }
}

showGitHubUser("anupmannem");
showGitHubUser("idonotexist");

// chaining multiple awaits
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  const userPromise = fetchFromGitHub(`/users/${handle}`);
  const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("anupmannem");

// multiple promises concurrently
async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}
async function showUsersAndRepos(handle) {
  const [user, repos] = await Promise.all([
    fetchFromGitHub(`/user/${handle}`),
    fetchFromGitHub(`/user/${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("anupmannem");

// await 42 == await Promise.resolve(42)

// making a generator asynchronous
Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");
const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

async function* someGenerator() {
  await delay(1000);
  yield 1;
  await delay(1000);
  yield 2;
  await delay(1000);
  yield 3;
}

async function main() {
  for await (const value of someGenerator) {
    console.log(value);
  }
}

main();
