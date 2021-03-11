const path = require("path")
const express = require('express')
const app = express()
const port = 8000
//relative path
//../pubic/

//absolute path
//an absolute or full path points to the same location in the file system 
//regardless of the current working directory

//console.log(__dirname)

const staticPath = path.join(__dirname, "../public")

//builtin middleware
app.use(express.static(staticPath))


app.get("/", (req, res) => {
    res.send("hello this is static site")
})

app.get("/about", (req, res) => {
    res.send("This is a about page")
})

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})