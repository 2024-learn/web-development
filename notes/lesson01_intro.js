// numbers
    // whole numbers/integers: 
    0, 300, -45
    // floats/decimals: 
        0.0, 300.5, -45.0

// boolean: 
true
false

// strings: numbers and characters inside quotes
"3"
"&"
" "
"primrose"

// array(list): syntax []
["fruits", "veggies", "meats"]
    // 
    // (3) ['fruits', 'veggies', 'meats']
    // 0 : "fruits"
    // 1: "veggies"
    // 2: "meats"
    // length: 3
// in Js you can mix different datatypes in an array
[4, 4.4, 12, 156, 23.789]
["test", 3.5, 3, true]

//object: syntax {key: value, key: value}
// You can have different data types, and even an object inside an object
userReview = {authorName: "user1", rating: 8, explanation: "great features"}
productReview = {
    location: "address 1234 place",
    price: "70",
    rating: 5,
    description: "some review",
    availabilty: true,
    images: ["imagelink1", "imagelink2", "imagelink3"]
}

// Working with numbers 
10 + 5
10 - 5
10 * 5
10 / 5
(10 * 5 + 6) * 2
50.00 + 69.99 + 76.65
12 + 12

// using + to concatentate
"12" + "12" == 1212
"hello" + " world"


// VARIABLES in js
var user1 = "app-user-1"

var sneakerPrice = 50
"sneaker price: $" + sneakerPrice
    // 'sneaker price: $50'


// CONDITONALS AND COMPARATORS
// assignment operator:
var name = "John"

// checking equality of values:
a == b

// compare equality of value and data type
c === d 

var age = 30
age == 30
// true

age == "30"
// true
// only checks for equality of value

age === "30"
// false
// This will be evaluated as false since the data types do not match

age === 30
// true

age == 40
// false
age === 40
// false


var totalPrice = 19
totalPrice > 20 // greater than
// false
totalPrice < 20 // less than
// true
totalPrice <= 20 // less than or equal to
// true
totalPrice >= 20 // greater than or equal to
// false


// IF/ELSE
// if totalPrice > 20 is true then offer free shipping otherwise charge $5
var totalPrice = 19;
var shippingCost;

if (totalPrice >= 20) {
    shippingCost = 0
} else {
    shippingCost = 5
}

// or:
if (totalPrice <= 20) {
    shippingCost = 5
} else {
    shippingCost = 0
}

// 3 conditions or more 
// if totalPrice below 10; then shippingCost $5
// if totalPrice below 20; then shippingCost $3
// if totalPrice above 20; then shippingCost $0
if (totalPrice <= 10) {
    shippingCost = 5
} else if (totalPrice <= 20) {
    shippingCost = 3
} else {
    shippingCost = 0
}

// not equals
userMembersip === premium  // equals
userMembersip !== premium // not equals

if (userMembersip !== premium) {
    // show only non-premium content
    // recommend premium upgrade
} else{
    // show premium content
}

// COMBINING CONDITIONS - LOGICAL OPERATORS 
// AND: both conditions must be true 
if (todayDate === birthdayDate && birthdayDisplayed === true) {
    // show notification
} else {
    // do not show notification
}

// OR: either one or both conditions must be true
if (todayPrice >= 35 || amazonPrime === true) {
    shippingCost = 0
} else {
    shippingCost = 5
}

// negation:
if (!(todayPrice >= 35 || amazonPrime === true)) {
    shippingCost = 5
}
