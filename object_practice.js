let student = {
    name: "Hari prasad koirala",
    age: 34,
    contact: 9746948739,
    email: "hari@gmail.com",
}


//converting to keys array
let keys = Object.keys(student)
console.log("keys:", keys)
let values = Object.values(student)
console.log("values", values)
//converting to entries [key,value]
let entries = Object.entries(student)
console.log("entries:", entries)

//destructive [a,b] =[45,67]
//entries loop
entries.forEach(
    ([keys, values], index) => {
        console.log("k:", keys, "v:", values)
    }
)
//find
let found = entries.find(
    ([key, value]) => key === "email"
)

console.log("found:", found);

//filter
let filtered = entries.filter(
    ([key, value]) => key.length > 4
)

console.log("filtered:", filtered)

//map
let mapped = entries.map(
    ([key, value]) => `${key} : ${value}`
);

console.log("mapped:", mapped)


//reduce
let count = entries.reduce(
    (acc, [key, value]) => acc + 1,
    0
);

console.log("count:", count);
