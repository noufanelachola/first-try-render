const express = require("express");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const app = express();

app.get("/",(req,res) => {res.json("it is working")});

app.listen(process.env.PORT || 3000,() => {
    console.log(`App is running on port ${process.env.PORT}`)
});