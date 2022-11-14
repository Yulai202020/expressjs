// import
const path = require("path");
const express = require("express");

// db
const pgp = require('pg-promise')();
const db = pgp("postgres://yulai:qaz123ZX@localhost:5432/test");

const PORT = process.env.PORT ?? 3000;
const app = express();

app.get("/", (req,res) => {
    if (req.subject === undefined && req.text === undefined) {
        var all_notes = db.query(`SELECT * FROM note`);
        if (all_notes === undefined)
            all_notes = [['','']]
        res.sendFile(path.resolve(__dirname,"templates","index.html"),{all_notes : all_notes});
    } else {
        console.log(req.subject);
        console.log(req.note);
        db.query(`INSERT INTO note(subject,text) VALUES ( ${req.subject} , ${req.note} )`)
    }
})

app.get("/create_note", (req,res) => {
    res.sendFile(path.resolve(__dirname,"templates","create.html"));
})

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} ...`);
})