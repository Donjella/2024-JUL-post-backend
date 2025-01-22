// import express
const express = require("express")

const app = express() // instantiating express, by covention we use app variable name

app.get("/", (req, res) => { // request, response names does not matter, but sequence does [request, response]
    // response.send("<h1>Hello World</h1>") //response.send is used to send html
    res.json({
        data: "Hello World!!"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        data: "Another route named hello"
    })
})

app.listen(3000, () => {
    console.log("Server started")
}) 