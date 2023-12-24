function isInvalidEmail(userObject) {
    return !userObject.email.includes("@")
}
// module.exports = isInvalidEmail (turn to list of exports below to export multiple functions)  

// ----> the function and export code is the same as below:
// exports.isInvalidEmail = (userObj) => {
//     return !userObj.email.included("@")
// }

function isEmptyPayload(userObject) {
    return Object.keys(userObject).length === 0
}
module.exports = {
    isInvalidEmail,
    isEmptyPayload
}
