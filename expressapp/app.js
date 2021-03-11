const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Hello world my first  express route")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.listen(8000, () => {
    console.log("listing the port at 8000")
})