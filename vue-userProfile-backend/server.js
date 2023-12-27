const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
// const validatorFunctions = require('./validator')
// const {isInvalidEmail, isEmptyPayload} = require('./validator')
const { isEmptyPayload, isInvalidEmail } = require('./validator')

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)

// const DB_USER = process.env.DB_USER
// const DB_PASS = process.env.DB_PASS

// const {DB_USER, DB_PASS} = process.env (adjust to authenticate with local env as well)
const {DB_USER, DB_PASS, DEV} = process.env
const dbAddress = '127.0.0.1:27017'

// Connection URL
// if (DEV) {
//     const url = 'mongodb://127.0.0.1:27017'
// } else {
//     const url = `mongodb://${DB_USER}:${DB_PASS}@127.0.0.1:27017?authSource=company_db`
// }
const url = DEV ? `mongodb://${dbAddress}` : `mongodb://${DB_USER}:${DB_PASS}@${dbAddress}?authSource=company_db`

// console.log("full url: ", url)

const client = new MongoClient(url)

// create db and collection
const dbName = 'company_db'
const collName = 'employees'

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
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

    // if (Object.keys(payload).length === 0 || isInvalidEmail(payload)) {
    // if (validatorFunctions.isEmptyPayload(payload)|| validatorFunctions.isInvalidEmail(payload)) {
    if (isEmptyPayload(payload) || isInvalidEmail(payload)) {
        res.send({error: "invalid payload; could not update user profile data"})
    } else {
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

const server = app.listen(3000, function(){
    console.log(" node app listening on port 3000")
})

module.exports = {
    app,
    server
}