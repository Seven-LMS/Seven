// lectassignmentcontent.js

import React, { useState } from "react";

function AddAssignment() {
    // Styles
    const contentStyle = {
        paddingTop: "20px",
    };

    const formStyle = {
        width: "100%",
        fontSize: "13px",
        marginTop: "10px",
    };

    const labelStyle = {
        width: "100%",
        marginTop: "5px",
    };

    const inputStyle = {
        marginLeft: "10px",
        minWidth: "150px",
    };

    const textareaStyle = {
        flexGrow: 1,
        minHeight: "100px",
        padding: "5px",
        overflowY: "auto",
    };

    const fileInputStyle = {
        marginTop: "5px",
    };

    const buttonStyle = {
        position: "fixed",
        bottom: "30px",
        right: "30px",
    };

    const [assignment, setAssignment] = useState({
        assignmentName: "",
        assignmentDetails: "",
        fileAttachment: "",
        pointsWeight: "",
    });

    const addAssignment = () => {
        // Get values from the form
        const { assignmentName, assignmentDetails, fileAttachment, pointsWeight } = assignment;

        // Create a new assignment element
        const assignmentElement = document.createElement("div");
        assignmentElement.classList.add("assignment");
        assignmentElement.innerHTML = `
            <h3>${assignmentName}</h3>
            <p>${assignmentDetails}</p>
            ${fileAttachment ? `<small>File Attachment: ${fileAttachment}</small><br>` : ''}
            <small>Points/Weight: ${pointsWeight}</small>
        `;

        // Append the new assignment to the content
        const contentDiv = document.querySelector(".content");
        contentDiv.appendChild(assignmentElement);

        // Clear the form
        document.getElementById("assignmentForm").reset();

        // Show the popup
        alert("Assignment added!");

        // Redirect to lect_classpage.html
        window.location.href = "lect_classpage.html";
    };

    return (
        <div className="content" style={contentStyle}>
            <div className="assignment-form" style={formStyle}>
                <h2>Classname - Add Assignment</h2>
                <form id="assignmentForm">
                    <div className="assignment-name" style={labelStyle}>
                        <label htmlFor="assignmentName">Assignment Name:</label>
                        <input
                            type="text"
                            id="assignmentName"
                            name="assignmentName"
                            required
                            style={inputStyle}
                            onChange={(e) => setAssignment({ ...assignment, assignmentName: e.target.value })}
                        />
                    </div>

                    <div className="assignment-details" style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="assignmentDetails" style={labelStyle}>
                            Assignment Details:
                        </label>
                        <textarea
                            id="assignmentDetails"
                            name="assignmentDetails"
                            required
                            style={textareaStyle}
                            onChange={(e) => setAssignment({ ...assignment, assignmentDetails: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="file-attachment" style={fileInputStyle}>
                        <label htmlFor="fileAttachment">File Attachment (Optional):</label>
                        <input
                            type="file"
                            id="fileAttachment"
                            name="fileAttachment"
                            onChange={(e) => setAssignment({ ...assignment, fileAttachment: e.target.value })}
                        />
                    </div>

                    <div className="points-weight" style={labelStyle}>
                        <label htmlFor="pointsWeight">Points/Weight:</label>
                        <input
                            type="number"
                            id="pointsWeight"
                            name="pointsWeight"
                            required
                            style={inputStyle}
                            onChange={(e) => setAssignment({ ...assignment, pointsWeight: e.target.value })}
                        />
                    </div>

                    <button type="button" onClick={addAssignment} style={buttonStyle}>
                        Add Assignment
                    </button>
                </form>
            </div>
        </div>
    );
}
export default AddAssignment;