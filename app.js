const express = require("express");
const app = express();

const fruitsController = require("./controllers/fruitsController")

// HomePage
app.get("/", (request, response) => {
    response.send(`Hello!`)
})

// Fruits Routes
app.use("/fruits", fruitsController)

module.exports = app