//higher order function:those function which takes another function as an argumnent or returns the functions.
//example
//arr: Array , operation:function
let applyOperation = (arr, operation)=>{
    return arr.map(operation)
}
let myNumbers = [45,67,85,65,2]
let double = applyOperation(
    myNumbers,
    (e,i)=>e*e

)
console.log("double:", double)
let cubeRes = applyOperation(
    myNumbers,
    (e,i)=>e*e*e

)
console.log("cube:",cubeRes)