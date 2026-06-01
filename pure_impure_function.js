//pure functions :those which donot has side effect i.e. doesnot depend on external value
//example
let calculateAreaOfRectangle = (length , breadth)=>{
    return length * breadth
}
let areaOfRect = calcullateAreaOfRectangle(245, 34)
console.log("area of rectangle:", areaOfRect)

//impure function:those function that has side effect i.e result of impure function always depends on the external variable
//example
const PI = 3.141516
let perimeterOfCircle = (radius)=>{
    return 2*PI*radius
}