const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', function(req, res) {
    const taskObject = req.body
    // connect to database
    // save new task to database
    console.log("saved task: ", taskObject.task)
    res.send({savedTask: taskObject.task})
})

app.get('/get-tasks', function(req, res) {
    const getTasks = [
        "Learn Programming",
        "Walk",
        "Shower",
        "Brush Teeth"
    ]
    res.send({tasks: getTasks})
})

app.listen(3000, function(){
    console.log(" node app listening on port 3000")
})