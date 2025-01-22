// import express
const express = require("express")
const mongoose = require("mongoose")

const postRouter = require("./routes/postRoutes")

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

app.use("/posts", postRouter)

app.listen(3000, async () => {
    console.log("Server started")
    // mongoose.connect("mongodb://127.0.0.1:27017/blog_db").then(() => {
    //     console.log("Database connected")
    // })
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_db")
    console.log("Database connected")

}) 