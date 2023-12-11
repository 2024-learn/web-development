// used to group related information
// unordered collection of key-value pairs (also called "properties")
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

var facebookUser = {
    userName: "John",
    password: "secretpass",
    email: "user@fb.com",
    profileImage: "reference-image"
}

// ACCESSING A PROPERTY OF AN OBJECT
// variable.key you want to access 
facebookUser.email
    // "user@fb.com"
facebookUser.password
    // "secretpass"


// MODIFYNG THE VALUE OF A PROPERTY
facebookUser.password = "newsecretpass"
    // "newsecretpass"


// ADDING A NEW PROPERTY TO AN OBJECT
facebookUser.about = "engineer"
facebookUser
    // {userName: 'John', password: 'newsecretpass', email: 'user@fb.com', profileImage: 'reference-image', about: 'engineer'}


// DELETING A PROPERTY OF AN OBJECT
delete facebookUser.about

facebookUser
  // {userName: 'John', password: 'newsecretpass', email: 'user@fb.com', profileImage: 'reference-image'}


// ADDING AN ARRAY TO AN OBJECT
facebookUser.friends = ['johnnie big money', 'cool john', 'big jon', 'john john']
facebookUser
    // {userName: 'John', password: 'newsecretpass', email: 'user@fb.com', profileImage: 'reference-image', friends: Array(4)}
    // email: "user@fb.com"
    // friends:
    //     0: "johnnie big money"
    //     1: "cool john"
    //     2: "big jon"
    //     3: "john john"
    // password: "newsecretpass"
    // profileImage: "reference-image"
    // userName: "John"


// ADDING AN OBJECT  WITHIN AN OBJECT
facebookUser.currentWork = { company: "ex-company", startDate: "2 years ago", position: "engineer I"}

facebookUser = {
currentWork: {company: 'ex-company', startDate: '2 years ago', position: 'engineer'},
email: "user@fb.com",
friends: ['johnnie big money', 'cool john', 'big jon', 'john john'],
password: "newsecretpass",
profileImage: "reference-image",
userName: "John"
}


// ADDING OBJECTS TO AN ARRAY WITHIN AN OBJECT
// facebookUser.posts: [{}, {}]
//  we can add the objects first then add them to an array
var post1 = {content: "super-post", likes: 25000, shares: 1000}
var post2 = {content: "boring-post", likes: 200, shares: 10}
facebookUser.posts =  [post1, post2]