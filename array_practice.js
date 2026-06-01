let myArr = [1, 2, 3, 4, 5];
//normal loop
for (let i = 0; i < myArr.length; i++) {
    let ele = myArr[i]
    console.log("ele", ele, "index:", i)
}
//forEach loop
myArr.forEach(
    //callback function
    (ele, i) => {
        console.log("inside forEach:", i, " Ele:", ele)
    }

)
// map loop
let modifiedArr = myArr.map(
    //callback function
    (ele, i) => {
        console.log("inside map:", i, " Ele:", ele)
        return ele * 10
    }
)
console.log("modified arr:", modifiedArr) 

let fruits =["Mango", "Apple", "Coconut", "Watermelon"]
//find
let foundFruit = fruits.find(
    (ele)=>{
        return ele.toLowerCase() == "apple"
    }

)
console.log("found fruit:", foundFruit)
//filter
let filterdFruits = fruits.filter(
    (ele)=> ele.toLowerCase().includes("a")
)
console.log("filtered fruits;", filterdFruits)
//reduce: summation or combination of element
let ages=[45,67,32,12]
let multiplyRes = ages.reduce(
    (accumulator,ele)=>{
        return ele* accumulator
    },

)
console.log ("acc :", multiplyRes)