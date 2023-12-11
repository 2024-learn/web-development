// array:
// an ordered list of values 
// arrays are zero-indexed (start counting from 0)
// index is the position of an item in an array. First element is at index 0
var friends = ['johnnie big money', 'cool john', 'big jon', 'john john']

// To get the value of an item in an array from an index 
friends[0]
    // 'johnnie big money'

facebookUser = {
    currentWork: {company: 'ex-company', startDate: '2 years ago', position: 'engineer'},
    email: "user@fb.com",
    friends: ['johnnie big money', 'cool john', 'big jon', 'john john'],
    password: "newsecretpass",
    profileImage: "reference-image",
    userName: "John",
    posts: [{content: "super-post", likes: 25000, shares: 1000}, {content: "boring-post", likes: 200, shares: 10}]
}
facebookUser.posts[1]
    // {content: 'boring-post', likes: 200, shares: 10}


// GETTING THE ARRAY SIZE
// The length property returns the number of elements in that array
facebookUser.posts.length
    // 2
friends.length
    // 4

// getting the last item from an array without knowing the length of the array
friends[friends.length-1]
    // 'john john'


// adding an element to the array
friends[4] = "lil jon"
// friends: ['johnnie big money', 'cool john', 'big jon', 'john john', 'lil jon']

// or you can add an item to the array at the last position using the length 
friends[friends.length] = "lil johny"
// friends: ['johnnie big money', 'cool john', 'big jon', 'john john', 'lil jon', 'lil johny']

// removing the last item from an array
friends.pop()
// friends: ['johnnie big money', 'cool john', 'big jon', 'john john', 'lil jon']


