
//copying an array 

let ar=[1,2,3];
let newar=[1,...ar];
console.log(newar);

//Concatenating an array

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];
let arr3=[...arr1,...arr2]
console.log(arr3);

// Spreading elements together with an individual element

let fruits = ['Apple','Orange','Banana'];

let newFruits = ['Cherry', ...fruits];
console.log(newFruits);

//  Spreading elements on function calls
let gifts=["rose","teddy","chocolate"];
var valDay=(f1,f2,f3)=>{
    console.log("gifts"+f1,f2,f3);
}
valDay(...gifts);


// Spread syntax for object literals

var obj1 = { id: 101, name: 'Jhon Doe' }

var obj2 = { age: 25, country: 'USA'}

const employee = { ...obj1, ...obj2 }

console.log(employee);
