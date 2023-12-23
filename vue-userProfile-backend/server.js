const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// create db and collection
const dbName = 'company_db'
const collName = 'employees'

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
    // const response = {
    //     name: "Phyllis L.",
    //     email: "phyllis@msmamas.com",
    //     interests: "tech"
    // }

    // Use connect method to connect to the mongodb server
    await client.connect()
    console.log('Connected successfully to server')

    // initiate or get db and collection
    const db = client.db(dbName)
    const collection = db.collection(collName)

    // get data from db
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()

    response = {}
    if (result !== null){
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }
    res.send(response)
})

app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)

    if (Object.keys(payload).length === 0) {
        // res.status(400).send({error: "empty payload; could not update user profile data"}) --> this sets the health status code
        res.send({error: "empty payload; could not update user profile data"})
    } else {
        // else update the data and send a message that it was successful
        // res.status(200).send({info: "user profile data updated successfully"})

        
        // Use connect method to connect to the mongodb server
        await client.connect()
        console.log('Connected successfully to server')

        // initiate the db -> if you don't have the db, it will create it for you and switch to it
        const db = client.db(dbName)
        const collection = db.collection(collName)

        // save payload to the database
        // add id key to the payload
        payload['id'] = 1;
        const updatedValues = { $set: payload }
        await collection.updateOne({id: 1}, updatedValues, {upsert: true})
        client.close()

        res.send({info: "user profile data updated successfully"})
    }
})

app.listen(3000, function(){
    console.log(" node app listening on port 3000")
})