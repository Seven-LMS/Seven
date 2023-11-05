const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const PORT = 3005;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "seven"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM course";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.get("/getCourses", (req, res) => {
    const sql = `
    SELECT c.name, cl.year, cl.semester
    FROM course AS c
    JOIN courselog AS cl ON c.cid = cl.cid;
    `;

    db.query(sql, (err, data) => {
        if (err) {
            // Handle the error
            console.error(err);
            res.status(500).send("An error occurred while fetching data.");
        } else {
            // Process the query result in 'data' and send a response
            res.json(data);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});