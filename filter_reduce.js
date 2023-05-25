//Filter out even numbers

const numbers=[1,2,3,4,5];
const even=numbers.filter(item=>item%2==0);
console.log(even);

//Filter out marks greater than equal to 90
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const selectedStudents = students.filter(item=>item.grade>90);
  console.log(selectedStudents);

//Reduce functionality to give sum of array numbers
const ar = [1,3,6,10];
const sum =ar.reduce(function(item,result){
result=result+item;
return result
},0);
console.log(sum);




