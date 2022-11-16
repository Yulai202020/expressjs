// import
const ctrl = require("./controller.js");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
const PORT = process.env.PORT ?? 3000;

app.get( "/", ctrl.index )

app.post( "/", ctrl.index_post )

app.get( "/create_note", ctrl.createNote )

app.get( "/setdata", ctrl.getData )

app.listen(PORT);