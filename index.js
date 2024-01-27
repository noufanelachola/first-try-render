const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/items", (req, res) => {
    res.json('Sending a list of items from the DB ...');
});
app.post("/api/items", (req, res) => {
    res.status(201).json('Sent the new data to the DB ...')
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});

// PGPASSWORD=WyHj08YPP9rxjh6EV2wKlLDRw1yVoK2v psql -h dpg-cmm4omgl5elc73c9rnd0-a.singapore-postgres.render.com -U clarifai_face_detection_database_user clarifai_face_detection_database
// PGPASSWORD= psql -h dpg-cmm4omgl5elc73c9rnd0-a.singapore-postgres.render.com -U clarifai_face_detection_database_user clarifai_face_detection_database


// psql -h dpg-cmm4omgl5elc73c9rnd0-a.singapore-postgres.render.com -U clarifai_face_detection_database_user -d clarifai_face_detection_database
