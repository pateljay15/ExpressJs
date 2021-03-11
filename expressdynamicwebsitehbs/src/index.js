const path = require("path")
const express = require('express')
const app = express()
const port = 8000


//const staticPath = path.join(__dirname, "../public")
//this is the path to the templates directory
const templatePath = path.join(__dirname, "../templates")

//to set the view engine
app.set("view engine", "hbs");
//by default directory name is views but if you want to change the directory name
//then you have to customize like below
//you require to give the path
app.set("views", templatePath)
// app.get("/", (req, res) => {
//     res.send("hello this is static site")
// })

//the order of the views must be maintain when using the same route
//template engine route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Jay",
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        name: "Jay",
    })
})

//builtin middleware
//app.use(express.static(staticPath))

// app.get("/", (req, res) => {
//     res.send("hello this is static site")
// })

app.get("/about", (req, res) => {
    res.send("This is a about page")
})

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})