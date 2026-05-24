// 1. Create promise that resolves
let promiseResolve = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully");
});

promiseResolve.then((message) => {
    console.log(message);
});


// 2. Create promise that rejects
let promiseReject = new Promise((resolve, reject) => {
    reject("Promise rejected");
});

promiseReject.catch((error) => {
    console.log(error);
});


// 3. Use .then()
let numberPromise = new Promise((resolve) => {
    resolve(10);
});

numberPromise.then((num) => {
    console.log("Number is:", num);
});


// 4. Use .catch()
let errorPromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

errorPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// 5. Convert to async/await
async function showMessage() {
    let result = await Promise.resolve("Using async/await");
    console.log(result);
}

showMessage();


// 6. Wait 2 seconds using setTimeout promise
function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 2 seconds");
        }, 2000);
    });
}

waitTwoSeconds().then((message) => {
    console.log(message);
});


// 7. Create function that returns promise
function getData() {
    return new Promise((resolve) => {
        resolve("Data received");
    });
}

getData().then((data) => {
    console.log(data);
});


// 8. Chain promises
Promise.resolve(5)
    .then((num) => {
        console.log(num);
        return num * 2;
    })
    .then((result) => {
        console.log(result);
        return result + 5;
    })
    .then((finalResult) => {
        console.log(finalResult);
    });


// 9. Use await inside async function
async function fetchValue() {
    let value = await Promise.resolve("Hello from await");
    console.log(value);
}

fetchValue();


// 10. Use multiple awaits
async function multipleAwaits() {
    let first = await Promise.resolve("First");
    let second = await Promise.resolve("Second");
    let third = await Promise.resolve("Third");

    console.log(first);
    console.log(second);
    console.log(third);
}

multipleAwaits();