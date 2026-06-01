//immutability principle:Alaways use the copy of original data so that orginal data remains original or may not modified refers to the immuability principle
let array =[56,45,34,57]
//array [3]= 67;
let temp = [...array]
temp[3] = 45;
console.log ("org dat:",array)
console.log("temp data:", temp)

//in object
let obj = {
    name:"Divya"
};
// creat a cpy of the object
let tempObj ={ ...obj};
//modified only the copied object
tempObj.name = tempObj.name.toUpperCase();

console.log("orginal object:",obj);
console.log("modified copy:",tempObj);

