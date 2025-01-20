let a = 10;

let b = 20;

// Create a new Promise that simulates asynchronous behavior
let waitingData = new Promise((resolve, reject) => {
    // Use setTimeout to mimic a delay of 2 seconds
    setTimeout(() => {
        // Resolve the Promise with the value 30
        resolve(30);
    }, 2000);
});

// Handle the resolved value of the Promise
waitingData.then((data) => {
    // Update the value of 'b' with the resolved data (30)
    b = data;
    console.log(a + b);
});