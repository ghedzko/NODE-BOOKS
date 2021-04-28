const express = require("express");
const app = express();
const path = require("path");
// Settings
app.set("port",5000);
app.set("views",path.join(__dirname, "views"));
// Middlewares

//Routes


//Statics

module.exports = app;
