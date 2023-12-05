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

app.get("/getLecturerLoginInfo/:email", (req, res) => {
    const email = req.params.email;

    const sql = `SELECT lid, name, email, password FROM lecturer WHERE email = ?`;

    db.query(sql, [email], (err, data) => {
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

app.get("/getLoginInfo/:email", (req, res) => {
    const email = req.params.email;

    const sql = `SELECT sid, name, email, password FROM student WHERE email = ?`;

    db.query(sql, [email], (err, data) => {
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

app.get("/getCourses/:sid", (req, res) => {
    
    const sid = req.params.sid;

    const sql = `SELECT s.sid, s.name, c.name, cl.year, cl.semester, cl.cid
    FROM course AS c
    JOIN courselog AS cl ON c.cid = cl.cid
    join coursetaken as ct on cl.id = ct.id
    join student as s on ct.sid = s.sid
    where s.sid=?;
    `;

    db.query(sql, [sid], (err, data) => {
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

app.get("/getCoursesLecturer/:lid", (req, res) => {

    const lid = req.params.lid;

    const sql = `SELECT l.lid, l.name, c.name, cl.year, cl.semester, cl.cid
    FROM course AS c
    JOIN courselog AS cl ON c.cid = cl.cid
    JOIN lecturer AS l ON cl.lid = l.lid
    where l.lid=?;
    `;

    db.query(sql, [lid], (err, data) => {
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

app.get("/getCourses", (req, res) => {
    const sql = `SELECT c.name, cl.year, cl.semester
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

app.get("/getAnnouncement", (req, res) => {
    const sql = `SELECT a.poster,a. title, a.content, a.datePosted, c.name, cl.id
    FROM announcement AS a
    JOIN courselog AS cl ON a.courseFrom = cl.id
    JOIN course AS c ON cl.cid = c.cid
    ORDER BY a.datePosted DESC;    
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

app.get("/getClass", (req, res) => {
    const sql = `SELECT c.name, cl.year, cl.semester, c.cid
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

app.get("/getClass/:classId", (req, res) => {
    const classId = req.params.classId;
    const sql = `SELECT c.name, cl.year, cl.semester, c.cid
    FROM course AS c
    JOIN courselog AS cl ON c.cid = cl.cid
    WHERE c.cid=?;   
    `;

    db.query(sql, [classId], (err, data) => {
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

app.get("/getAnnouncement/:classId", (req, res) => {
    const classId = req.params.classId;
    const sql = `SELECT a.poster, a.content, a.datePosted
    FROM announcement AS a
    WHERE substr(courseFrom, 1, 2) = ?; 
    `;

    db.query(sql, [classId], (err, data) => {
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

app.get("/getModules/:classId", (req, res) => {
    const classId = req.params.classId;
    const sql = `SELECT md.name, md.modid, md.cid
    FROM modules AS md
    WHERE md.cid = ?;
    `;

    db.query(sql, [classId], (err, data) => {
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

app.get("/getAssignments/:classId", (req, res) => {
    const classId = req.params.classId;
    const sql = `SELECT md.name, md.modid, md.cid, ass.name, ass.description, ass.datePosted, ass.attachmentLink
    FROM modules AS md
    JOIN assignments AS ass on md.modid = ass.modid
    WHERE md.cid = ?;
    `;

    db.query(sql, [classId], (err, data) => {
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

app.get("/getAssignments", (req, res) => {
    const sql = `SELECT name, dateDue
    FROM assignments;   
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

app.get("/getMaterials/:classId", (req, res) => {
    const classId = req.params.classId;
    const sql = `SELECT md.name, md.modid, md.cid, mat.name, mat.description, mat. datePosted, mat.attachmentLink
    FROM modules AS md
    JOIN materials AS mat on md.modid = mat.modid
    WHERE md.cid = ?;
    `;

    db.query(sql, [classId], (err, data) => {
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

app.get("/getProfile", (req, res) => {
    const sql = `SELECT s.sid, s.name, m.name AS major, s.email, s.phone, s.dob, s.gender, s.picture, s.address, s.password
    FROM student AS s
    JOIN major AS m ON s.mid = m.mid;
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

app.get("/getProfile/:sid", (req, res) => {
    
    const sid = req.params.sid;

    const sql = `SELECT s.sid, s.name, m.name AS major, s.email, s.phone, s.dob, s.gender, s.picture, s.address, s.password
    FROM student AS s
    JOIN major AS m ON s.mid = m.mid
    WHERE s.sid = ?;
    `;

    db.query(sql, [sid], (err, data) => {
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

app.put('/updateProfile/:userId', (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body;
    console.log('Received data for updating profile:', updatedData); // Log the received data
  
    const sql = 'UPDATE student SET ? WHERE sid = ?';
  
    db.query(sql, [updatedData, userId], (err, result) => {
      if (err) {
        console.error('Error updating profile data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      return res.status(200).json({ message: 'Profile data updated successfully' });
    });
  });
  

// const multer = require('multer');
// const path = require('path');

// // Set up Multer for handling file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'D:\\xampp\\htdocs\\profilepict'); // Correctly escape the backslashes
//     },
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       cb(null, 'profile_picture_' + Date.now() + ext);
//     },
//   });
  
//   const upload = multer({ storage });
  
//   // API endpoint to handle file upload (profile picture)
//   app.post('/uploadPicture/:userId', upload.single('picture'), (req, res) => {
//     const userId = req.params.userId;
//     const pictureLocation = req.file.filename; // Use filename instead of path
  
//     const sql = 'UPDATE student SET picture = ? WHERE sid = ?'; // Correct the table name to 'student'
//     db.query(sql, [pictureLocation, userId], (err, result) => {
//       if (err) {
//         console.error('Error updating profile picture:', err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }
  
//       return res.status(200).json({ message: 'Profile picture updated successfully' });
//     });
//   });  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});