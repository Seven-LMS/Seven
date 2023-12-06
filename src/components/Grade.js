import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/gradestyle.css";

function Grade() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend endpoint
    axios.get('http://localhost:3005/getAllGrades')
      .then(response => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once on mount

  const saveGrades = () => {
    // Logic to handle saving grades
    // For example, you can send a request to the server to save the grades
    console.log("Grades saved:", students);
  };

  return (
    <div className="title">
      <h2>Classname</h2>

      <label htmlFor="assignment" style={{ fontSize: "14px" }}>Select Assignment:</label>
      <select id="assignment"></select>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.sid}>
              <td style={{ textAlign: "center" }}>{student.sid}</td>
              <td style={{ textAlign: "center" }}>{student.name}</td>
              <td style={{ textAlign: "center" }}>
                <input
                  type="text"
                  name={`grade-${student.sid}`}
                  value={student.grade}
                  onChange={(e) => {
                    const updatedStudents = students.map((s) =>
                      s.id === student.sid
                        ? { ...s, grade: e.target.value }
                        : s
                    );
                    setStudents(updatedStudents);
                  }}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    textAlign: "center",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="save-button" style={{ position: "fixed", right: "30px", bottom: "30px" }}>
        <button onClick={saveGrades}>Save</button>
      </div>
    </div>
  );
}

export default Grade;
