// 1. Use fetch to get data from https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(response) {
//     return response.json
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })



// 2. Create a promise that, generates a random number between 1 and 10. Use .then/catch to handle the promise

// const myPromise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 10)

//     if (number < 2) {
//         resolve('Operation Success');
//     } else {
//         reject('Operation Failed');
//     }
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// 3. Create an async/await function to perform the same operation, displaying the result.

const myPromise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10)

    if (number < 2) {
        resolve('Operation Success');
    } else {
        reject('Operation Failed');
    }
});

async function main() {
    try {
        const result = await myPromise
        console.log(result);

    } catch (error) {
        console.log(error);

    }
}
main()