const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp(process.env.DB_LINK);

function index_post(req,res){
    console.log(req.subject);
    console.log(req.note);
    db.query(`INSERT INTO note (subject, text) VALUES ('${req.subject}' , '${req.note}')`);
    res.redirect("/");
}

function createNote(req, res){
    res.render("create.html");
}

function index(req, res){
    res.render("index.html");
}

function getData(req, res){
    var all_notes = db.query(`SELECT * FROM note`);
    const data = [all_notes];
    res.send(data);
}

const ctrl = { index, index_post, createNote, getData };

module.exports = ctrl;