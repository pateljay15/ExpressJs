const { json } = require("express")
const express = require("express")
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h1>Hope my website is not down</h1>")
    res.send()
})

app.get('/about', (req, res) => {
    res.status(200).send("welcome to my about page")
})

// why we use status() function?
// we use statusCode to reflect proper status for example if the page 
// is not found and we display 404 page then without using status code it shows
// status code 200 that is wrong so by using statusCode we reflect proper status.

// answer to the upper shown answer
// correct. but when we use the express module, it automatically handles the 
// status code. e.g - if you request on a page that is not defined
// in the routes, it will throw 404.

app.get('/contact', (req, res) => {
    res.send("welcome to my contact page")
})

// app.get('/temp', (req, res) => {
//     res.send(null)
// })

app.get('/temp', (req, res) => {
    res.json([
        {
            id:1,
            name: "jay",
        },
        {
            id:2,
            name: "kandarp",
        }
    ])
})

// res.send() will automatically convert array and objects into json behind the scene

// The methods res.json() and res.send() are identical when an object and Array
// is passed but res.json() will also convert non-objects(null, undefined)
// , which are not valid JSON. while res.send() will not convert non-objects to json.

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})

