let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());

// console.log(date.toLocaleString());
// let takenDate = date.toLocaleString();
// let storedDate = takenDate.split(",")
// console.log(storedDate);

// console.log(date.toISOString());
// console.log(typeof date);

// let newDate = new Date(2025,3,25,5,55);
// let newDate = new Date("2026-04-30");
// console.log(newDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(date.getTime())
// console.log(Math.floor(Date.now()/1000))
// console.log(date);
// console.log(date.getMonth()+1);
// console.log(date.getDay());//Starts from Monday


console.log(date.toLocaleString("default",{
    weekday : "short"
}));


