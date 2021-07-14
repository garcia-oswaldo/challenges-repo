// // Exercise 90
// // Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author’s name
// assert(getBookAuthor(book), “Frances Buontempo”, “Exercise 90");
// addToDone(“Exercise 90 is complete.“)
// // The next exercises work with a arrays of objects.
// // You’ll see arrays of objects over and over again with data in a program.
// // Here is our arrays of objects.

function getBookAuthor(book) {

    return book.author;
}




const books = [
    {
       title: 'Genetic Algorithms and Machine Learning for Programmers',
        price: 36.99,
       author: 'Frances Buontempo'
},
{
title: 'The Visual Display of Quantitative Information',
price: 38.00,
author: 'Edward Tufte'
},
{
title: 'Practical Object-Oriented Design',
author: 'Sandi Metz',
price: 30.47
},
{
title: 'Weapons of Math Destruction',
author: 'Cathy O’Neil',
price: 17.44
}
]
// // Exercise 91
// // Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
// assert(getNumberOfBooks(books), 4, “Exercise 91”);

function getNumberOfBooks(arr) {
    return arr.length
};
// addToDone(“Exercise 91 is complete.“)
// // Exercise 92
// // Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
// assert(totalOfBookPrices(books), 122.9, “Exercise 92”)
// addToDone(“Exercise 92 is complete.“)

function totalOfBookPrices(arr) {
    var totalPrice = 0

    for (let i = 0; i < arr.length; i++) {
        totalPrice = totalPrice + arr[i].price;
        //index = [ price1, price2, price 3 ...]


    }
    return totalPrice;
}
console.log(totalOfBookPrices(arr))
// // Exercise 93
// // Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
// assert(getAverageBookPrice(books), 30.725, “Exercise 93”);
// addToDone(“Exercise 93 is complete.“)
// // Exercise 94
// // Write a function called highestPriceBook that takes in the above defined array of objects “books” and returns the object containing the title, price, and author of the book with the highest priced book.
// // Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object’s price in the array
// assert(highestPriceBook(books), {
//    “title”: “The Visual Display of Quantitative Information”,
// “price”: 38.00,
//    “author”: “Edward Tufte”
// }, “Exercise 94”);
// addToDone(“Exercise 94 is complete”)
// // Exercise 95
// // Write a function called lowestPriceBook that takes in the above defined array of objects “books” and returns the object containing the title, price, and author of the book with the lowest priced book.
// // Hint: Much like sometimes start functions with a variable set to zero or float(‘inf’), you may want to create a object with the price set to float(‘inf’) to compare to each object in the array
// assert(lowestPriceBook(books), {
//    “title”: “Weapons of Math Destruction”,
// “author”: “Cathy O’Neil”,
// “price”: 17.44
// }, “Exercise 95”);
// addToDone(“Exercise 95 is complete.“)
// const shoppingCart = {
//    “tax”: .08,
//    “items”: [
//     {
//            “title”: “orange juice”,
// “price”: 3.99,
//            “quantity”: 1
// },
// {
// “title”: “rice”,
// “price”: 1.99,
//            “quantity”: 3
// },
// {
// “title”: “beans”,
// “price”: 0.99,
//            “quantity”: 3
// },
// {
// “title”: “chili sauce”,
// “price”: 2.99,
//            “quantity”: 1
// },
// {
// “title”: “chocolate”,
// “price”: 0.75,
//            “quantity”: 9
// }
// ]
// }
// // Exercise 96
// // Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// // Hint: How do you access a key’s value on a object? The tax rate is one key of the entire shoppingCart object.
// assert(getTaxRate(shoppingCart), .08, “Exercise 96”);
// addToDone(“Exercise 96 is complete”)
// // Exercise 97
// // Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// // We’re not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
// assert(numberOfItemTypes(shoppingCart), 5, “Exercise 97”);
// addToDone(“Exercise 97 is complete.“)
// // Exercise 98
// // Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// // This should return the sum of all of the quantities from each item type
// assert(totalNumberOfItems(shoppingCart), 17, “Exercise 98”);
// addToDone(“Exercise 98 is complete.“)
// // Exercise 99
// // Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// // Hint - This should determine the total price divided by the number of types of items. This does not account for each item type’s quantity.\
// assert(getAverageItemPrice(shoppingCart), 2.1420000000000003, “Exercise 99”);
// addToDone(“Exercise 99 is complete.“)
// // Exercise 100
// // Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item’s quanties times that item’s price.
// // Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
// assert(getAverageSpentPerItem(shoppingCart), 1.333529411764706, “Exercise 100”);
// addToDone(“Exercise 100 is complete.“)
// // Exercise 101
// // Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// // Be sure to do this as programmatically as possible.
// // Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// // Hint: Consider creating a variable that is a object with the keys “price” and “quantity” both set to 0. You can then compare each item’s price and quantity total to the one from “most”
// assert(mostSpentOnItem(shoppingCart), {
//    “title”: “chocolate”,
// “price”: 0.75,
//    “quantity”: 9
// }, “Exercise 101");
// addToDone(“Exercise 101 is complete.“)


// 1. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.
function isNegative(number){
    return number <0;
}
// 1. Write a function named `isTen` that accepts a number and returns a boolean
// that indicates whether or not that number is equal to `10`.
function isTen(number){
    return number === 10;
}
//     Write a function named `double` that accepts a number and returns the number
// doubled.

function double(number){
    return number *2;
}
//     Write a function named `remove9s` that accepts an array of numbers and
// returns an array with all the same numbers except for `9`.

//  Write a function named `average` that accepts an array of numbers and returns
// the average of those numbers.
function average(arr){
    var countitems=0;

    for (var i = 0; i < arr.length; i++) {
        countitems = countitems + arr[i]
    }
    return countitems/arr.length;

    }


//     Bianca Reusch to Everyone (6:19 AM)
// 1. Write a function named `capitalizeName` that accepts a string that is a first
// and last name separated by a space, and returns a string that that has the
// first and last names capitalized.

function captalizeName(str){
    var arr=str.split(" "); // creates one array of two elements  ["bob" , "jill"]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase())
        //array itself ["bob" , "jill"] = ["bob" , "jill"]. replace ["bob" , "jill"] character at 0 first letter ,
        // ["Bob" , "Jill"]
    }
    return arr.join(" ");
    // Join put them together and outputs["bob" , "jill"]


    }
}