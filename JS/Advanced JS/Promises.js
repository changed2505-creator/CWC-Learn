let Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Promise 1");
        resolve()
    }, 1000);
})
Promise1.then(() => {
    // console.log("Promise 1 complete");    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Promise 2");
        resolve()
    }, 1000);
}).then(() => {
    // console.log("Promise 2 complete");    
})

let Promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ Name: "Rocky Bhai", Age: "35" })
    }, 2000)
})
Promise3.then((data) => {
    // console.log(data);    
})

let Promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = new TypeError('Typo error');
        if (!error) {
            resolve({ Name: 'Hitesh' })
        }
        else {
            reject(error)
        }
    }, 2000);
})
Promise4.then((data) => {
    //  console.log(data)
    return (data.Name)
}).then((name) => {
    // console.log(name);    
}).catch((err) => {
    // console.log(err);    
}).finally(() => {
    // console.log('Execution complete');    
})

let Promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ Name: 'NoError', ID: 500 })
        }
        else {
            reject('ERROR!!!')
        }
    }, 2000);
})
async function executePromise() {
    try {
        let Response = await Promise5
        // console.log(Response);
    } catch (err) {
        // console.log(err);

    }
}
executePromise()

async function users() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        // console.log(data);

        let dataPromise = new Promise((resolve,reject)=>{
            
        })
    } catch (error) {
        // console.log("ERROR!!!");
    }
}
// users() 

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    // console.log(data);    
}).catch((err)=>{
    // console.log(err);    
})

