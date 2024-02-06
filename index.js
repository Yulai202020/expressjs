// import
const ctrl = require("./controller.js");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/templates')));

const PORT = process.env.PORT ?? 3000;

app.get( "/", ctrl.index );

app.post( "/", ctrl.index_post );

app.get( "/create_note", ctrl.createNote ).use(express.static(path.join(__dirname, '/templates')));

app.get( "/getdata", ctrl.getData );

app.listen(PORT);