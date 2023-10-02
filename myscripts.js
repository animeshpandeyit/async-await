// // //  always return a promise
// // async function getData() {
// //   return "data";
// // }
// // const data = getData();

// // console.log(data);

// // data.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//   return resolve("promise resolved with data");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// //  using await promise

//  how to use async with await

// const promise = new Promise((resolve, reject) => {
//   return resolve(url);
// });

// promise.then((res) =>{

// });

// const api_url = "https://randomuser.me/api/";

// const p = new Promise((resolve, reject) => {
//   resolve("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
// });

// async function handleRequest() {
//   const value = await p;
//   console.log(value);
// }

// handleRequest();

//  await can only be used inside async functions

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 3000);
// });

// async function handleResponse() {
//   const value = await promise;
//   console.log("hey javascript");
//   console.log(value);
// }

// handleResponse();
//  old way of handeling response

// function getData() {
//   promise.then((res) => console.log(res));
//   console.log("hey javascript");
// }
// getData();

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return resolve("promise resolved");
//   }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return resolve("promise resolved");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("hello javascript");
//   const val1 = await promise1;
//   console.log(val1);
//   const val2 = await promise2;
//   console.log(val2);
// }
// handlePromise();

const api_url = "https://api.github.com/users/animeshpandeyit";

async function handlePromise() {
  //   try {
  const data = await fetch(api_url);

  const jsonValue = await data.json();
  console.log(jsonValue);
  //   }

  //   catch (err) {
  //     console.log(err);
  //   }

  //    fetch => Response object , which contains a body which is a readble stream of... res.json() => it gives you the json value of
}
handlePromise().catch((err) => {
  console.log(err);
});

//  async function returns a promise
//  async function is a function that can be used with await function to handle promises
