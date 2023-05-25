//Map-squared nmbers
// Input
// const input = [1, 2, 3, 4, 5];
// Result
// [1, 4, 9, 16, 25];
let arrayOld = [1, 2, 3, 4, 5];
const squared = (num) => {
  return Math.pow(num, 2);
};
let arrayNew = arrayOld.map(squared);
console.log(arrayNew);


//Input
// const input = "George Raymond Richard Martin";
// Result
// "GRRM";
var inputAr = "George Raymond Richard Martin";
inputAr = inputAr.split(" ");
const strab=(str)=>{
    return str.charAt(0)
}
let strNew = inputAr.map(strab).join('');
console.log(strNew);

// Input
// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];
// Result
// [13, 67, 54];
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
let ages = input.map((person=>person.age));

[Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)];