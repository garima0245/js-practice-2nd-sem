
// 1. Create an array colors and log 3rd element
// Array of colors
let colors = ["Red", "Blue", "Green", "Yellow", "Black"];

// Log the third element (index 2)
console.log("Third color:", colors[2]);



// 2. Create an object book
// Object representing a book
let book = {
    title: "The Leader In You ",
    author: "Dale Carnegie",
    pages: 208,
    publishedYear: 1993
};

// Display the object
console.log("Book:", book);



// 3. Add isRead property immutably
// Original book object
let book1 = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    pages: 336,
    publishedYear: 1997
};

// Create a copy and add a new property
let updatedBook = {
    ...book1,
    isRead: true
};

// Display both objects
console.log("Original Book:", book1);
console.log("Updated Book:", updatedBook);

// 4. Array of student objects
// Array containing student objects
let students = [
    { name: "Anusha", grade: 85 },
    { name: "Garima", grade: 92 },
    { name: "Aakirti", grade: 78 }
];

// Display students array
console.log("Students:", students);


// 5. Nested object company
// Object with an array inside it
let company = {
    name: "Tech Solutions",
    location: "Kathmandu",
    employees: ["Aakirti", "divya", "anusha"]
};

// Display company object
console.log("Company:", company);


// 6. Increase each array value by 5 immutably
// Original array
let numbers = [10, 20, 30];

// Create a new array with updated values
let increasedNumbers = numbers.map(
    (num) => num + 5
);

// Display arrays
console.log("Original Numbers:", numbers);
console.log("Updated Numbers:", increasedNumbers);


// 7. Add color property to car immutably
// Original car object
let car = {
    brand: "Toyota",
    model: "Corolla"
};

// Create a copy and add color
let newCar = {
    ...car,
    color: "White"
};

// Display objects
console.log("Original Car:", car);
console.log("Updated Car:", newCar);


// 8. Add item at beginning of shopping list
// Original shopping list array
let shoppingList = ["Milk", "Bread", "Eggs"];

// Create new array with item added at start
let updatedList = ["Rice", ...shoppingList];

// Display arrays
console.log("Original List:", shoppingList);
console.log("Updated List:", updatedList);


// 9. Profile object with nested address object
// Object containing another object
let profile = {
    name: "Divya",
    age: 19,
    address: {
        city: "Pokhara",
        country: "Nepal"
    }
};

// Display profile object
console.log("Profile:", profile);


// 10. Create new array with only name and price
// Array of product objects
let products = [
    { name: "Laptop", price: 50000, brand: "Dell" },
    { name: "Phone", price: 25000, brand: "Samsung" },
    { name: "Tablet", price: 30000, brand: "Lenovo" }
];

// Create a new array containing only name and price
let productInfo = products.map(
    (product) => {
        return {
            name: product.name,
            price: product.price
        };
    }
);

// Display result
console.log("Product Info:", productInfo);