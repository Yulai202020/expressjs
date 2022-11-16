const pgp = require('pg-promise')();
const path = require("path");
require('dotenv').config()


const db = pgp(process.env.DB_LINK);

function index(req,res){
    if (req.subject !== undefined && req.text !== undefined) {
        console.log(req.subject);
        console.log(req.note);
        db.query(`INSERT INTO note(subject,text) VALUES ( ${req.subject} , ${req.note} )`)
    }
    var all_notes = db.query(`SELECT * FROM note`);
    if (all_notes === undefined)
        all_notes = [['','']]
    res.sendFile(path.join(__dirname+"/templates/index.html"),{all_notes : all_notes});
}

function createNote(req,res){
    res.sendFile(path.join(__dirname+"/templates/create.html"));
}

const ctrl = { index, createNote }

module.exports = ctrl;