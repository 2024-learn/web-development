const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function(req, res) {
    // in the future, here we'll have logic to get data from the database.

    const response = {
        name: "Phyllis L.",
        email: "phyllis@msmamas.com",
        interests: "tech"
    }
    res.send(response)
})

app.post('/update-profile', function(req, res) {
    const payload = req.body
    console.log(payload)
    if (Object.keys(payload).length === 0) {
        // res.status(400).send({error: "empty payload; could not update user profile data"}) --> this sets the health status code
        res.send({error: "empty payload; could not update user profile data"})
    } else {
        // else update the data and sens a message that it was successful
        // res.status(200).send({info: "user profile data updated successfully"})
        res.send({info: "user profile data updated successfully"})
    }

    // save code into the database
})

app.listen(3000, function(){
    console.log(" node app listening on port 3000")
})