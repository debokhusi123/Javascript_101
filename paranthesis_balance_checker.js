str="({[]})";
const parChecker = () =>{
ar = str.split("")
console.log(ar);
const middleIndex = Math.ceil(ar.length / 2);

const firstHalf = ar.splice(0, middleIndex);   
const secondHalf = ar.splice(-middleIndex);
console.log(firstHalf); 
console.log(secondHalf);
}
parChecker();
//then check firstIndex and last index after verify pop and Selection

//Understand later


//User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
*/

class Solution
{
    
    ispar(x)
    {
        let expression = [];
        let lastIndex = 0;
        for (let i = 0; i < x.length; i++) {
            if(i==0) {
                expression.push(x.charAt(i));
                continue ;
            }
            
            if(x.charAt(i) == ')' && '(' == expression[lastIndex]) {
                expression.pop();
                lastIndex--;
            } else if(x.charAt(i) == '}' && '{' == expression[lastIndex]) {
                expression.pop();
                lastIndex--;
            } else if(x.charAt(i) == ']' && '[' == expression[lastIndex]) {
                expression.pop();
                lastIndex--;
            } else {
                expression.push(x.charAt(i));
                lastIndex++;
            }
        }
        if(expression.length == 0) {
            return true;
        }
        return false;
    }
}