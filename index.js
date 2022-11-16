// import
const ctrl = require("./controller.js");
const express = require("express");

const PORT = process.env.PORT ?? 3000;
const app = express();

app.get( "/", ctrl.index )

app.get( "/create_note", ctrl.createNote )

app.listen(PORT);