// lectgradecontent.js

import React, { useState, useEffect } from "react";

function LectGrade() {
    const [grades, setGrades] = useState([
        { id: "001", name: "John Doe", grade: "" },
        { id: "002", name: "Jane Smith", grade: "" },
        // Add more rows as needed
    ]);

    useEffect(() => {
        // Call the function to populate the assignment dropdown on page load
        populateAssignmentDropdown();
    }, []);

    const saveGrades = () => {
        // Add your logic here to save grades to the server
        alert("Grades saved!");
    };

    const getParameterByName = (name) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    };

    const populateAssignmentDropdown = () => {
        const assignmentDropdown = document.getElementById("assignment");
        const assignmentParam = getParameterByName("assignment");

        // If the "assignment" parameter is present, automatically select it
        if (assignmentParam) {
            const option = document.createElement("option");
            option.value = assignmentParam;
            option.text = assignmentParam;
            assignmentDropdown.appendChild(option);
            assignmentDropdown.value = assignmentParam;
        } else {
            // If no parameter, allow the lecturer to choose an assignment
            // Add options manually or fetch dynamically based on your requirements
            const defaultOption = document.createElement("option");
            defaultOption.value = "assignment1";
            defaultOption.text = "Assignment 1";
            assignmentDropdown.appendChild(defaultOption);

            const option2 = document.createElement("option");
            option2.value = "assignment2";
            option2.text = "Assignment 2";
            assignmentDropdown.appendChild(option2);
        }
    };

    return (
        <div className="content">
            <div className="title">
                <h2>Classname</h2>
            </div>

            {/* Assignment Dropdown */}
            <label htmlFor="assignment" style={{ fontSize: "14px" }}>
                Select Assignment:
            </label>
            <select id="assignment">
                {/* Options will be added dynamically based on the parameter in the URL */}
            </select>

            {/* Student Grading Table */}
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((student) => (
                        <tr key={student.id}>
                            <td style={{ textAlign: "center" }}>{student.id}</td>
                            <td style={{ textAlign: "center" }}>{student.name}</td>
                            <td style={{ textAlign: "center" }}>
                                <input
                                    type="text"
                                    name="grade"
                                    style={{
                                        width: "100%",
                                        border: "none",
                                        background: "transparent",
                                        textAlign: "center",
                                    }}
                                    value={student.grade}
                                    onChange={(e) => {
                                        const newGrades = [...grades];
                                        const index = newGrades.findIndex(
                                            (s) => s.id === student.id
                                        );
                                        newGrades[index].grade = e.target.value;
                                        setGrades(newGrades);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Save Button */}
            <div className="save-button" style={{ position: "fixed", right: "30px", bottom: "30px" }}>
                <button onClick={saveGrades}>Save</button>
            </div>
        </div>
    );
}

// Styling
const styles = `
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-size: 13px;
        border-style: solid;
        border-color: #333366;
        background-color: #FFFFE0; /* Pale Yellow Background Color */
    }

    th, td {
        padding: 8px;
        text-align: center; /* Center the content in the cells */
    }

    th {
        border-bottom: 1px solid #333366;
    }

    .save-button {
        margin-top: 20px;
        text-align: right;
    }

    .save-button button {
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

// Apply styles to the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LectGrade;
