const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dotenv = require('dotenv');
dotenv.config();

const db = require('./dbConfig');



app.get("/api/items", (req, res) => {
    db.select("*")
        .from("items")
        .then(data => res.json(data))
        .catch(err => console.log("unable to show table"));   
});

app.post('/api/items', (req, res) => {
    const { description } = req.body;
    console.log(req.body);
    db("items").insert({ description:description}).returning("*")
        .then(data => res.json(data)).catch(err => console.log("err in inserting"))
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
})
