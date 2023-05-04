/* FACTORIALIZE

Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n! */

//PSEUDOCODE
//Create a function that has a number as argument
//Create a var to save that number
//If statement for number is === to  0 or 1, if that if true will return 1
//Check num <0
//While (num > 1)
////n= (n-1)(n-2)(n-3)
//Number -1 (2)
//Multiple number (2) per the saved original number (3)
//Return
//...
//Print the factorial of the number (3)




function Factorialize(num){
    let result = num;//var to save the numbers

    if(num ===0 || num ===1){
        return 1
    }else if (num < 0){
        console.log("opps the number is smaller than 0") 
    }
    while (num > 1) {
        num-- //previous number
        result = result * num
    }
    return result
}
console.log(Factorialize(3))

//DIAGRAM
//Function with number 3 is called
//Number 3 is saved 
// 3=== 0 or 1? FALSE, then 3<0 FALSE, then 3>1 TRUE
// num=2, result =3*2 (6)
//...
//2>1 TRUE, then
// num=1, result =6*1 (6)