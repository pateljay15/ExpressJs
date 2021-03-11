const path = require("path")
const express = require('express')
const app = express()
const hbs = require('hbs')
const { stringify } = require("querystring")
const requests = require("requests")
const port = 8000

//when u r gonna use hbs in express you are gonna face one thing that
//when u save any file of .js extension the server automatically reloads up
//but when u change any .hbs extension file the server didnt gets automatically
//loads up but you have to loads the server again
//so to overcome this difficulty you have to configure your nodemon by using below command
//nodemon src/index.js -e js,hbs ////here e means extension you want to configure 
//to reload your server 

const staticPath = path.join(__dirname, "../public/css")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set("views", templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.render("index", {
        name: "Jay",
    })
})

app.get("/temp", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=ed8712101a275be914e62dd090271022`)
        .on("data", (chunk) => {
            const objData = JSON.parse(chunk) 
            const arrData = [objData]
            console.log(arrData[0].name)
            console.log(arrData[0].main.temp)
            res.render("temp", {
                city: arrData[0].name,
                temp: arrData[0].main.temp,
            })
            
        })
        .on("end", (err) => {
            if(err) return console.log("connection closed due to error")
        })
})

//https://api.openweathermap.org/data/2.5/weather?q=Anand&units=metric&appid=ed8712101a275be914e62dd090271022
app.get("/about", (req, res) => {
    console.log(req.query)
    // http://localhost:8000/about?fname=Jay&lname=Patel
    // ? means start of the query string
    // fname and lname means variable or Key
    // after = is the value of the key name
    // after ? if you want to add more than one parameter then you have to use
    // & is a parameter separator and you will get below result as an object
    //{ fname: 'Jay', lname: 'Patel' }
    res.render("about", {
        fname:req.query.fname,
        lname:req.query.lname,
    })
})

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "Opps, this about page couldn't be found",
    })
})
app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Opps, this page couldn't be found",
    })
})


app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})