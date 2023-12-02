// lectclasscontent.js

import React, { useEffect, useState } from "react";

// Dummy data for materials and assignments
const materials = ["Material 1", "Material 2"];
const assignments = ["Assignment 1", "Assignment 2"];

const LectClassContent = () => {
    // Styles
    const editButtonStyle = {
        padding: "3px 10px",
        borderStyle: "solid",
        borderRadius: "7px",
        borderColor: "#333366",
        backgroundColor: "white",
        marginRight: "5px",
        width: "fit-content",
    };

    const iconStyle = {
        marginRight: "5px",
    };

    const classDescButtonStyle = {
        borderStyle: "solid",
        borderColor: "var(--bgc)",
        borderRadius: "7px",
        display: "flex",
        padding: "0px 10px 3px 10px",
        color: "var(--bgc)",
        backgroundColor: "white",
    };

    const listStyle = {
        width: "100%",
        marginTop: "3px",
        padding: "5px",
        fontSize: "13px",
    };

    const assignmentElementStyle = {
        display: "flex",
        justifyContent: "space-between",
    };

    const addButtonStyle = {
        padding: "0 5px",
        marginTop: "5px",
        marginBottom: "5px",
    };
    const [materialList, setMaterialList] = useState(materials);
    const [assignmentList, setAssignmentList] = useState(assignments);

    useEffect(() => {
        // Add any additional logic or side effects here
    }, []);

    // Functions to add material and assignment dynamically
    const addMaterial = () => {
        // Redirect to add_material.html
        window.location.href = "add_material.html";
    };

    const addAssignment = () => {
        // Redirect to add_assignment.html
        window.location.href = "add_assignment.html";
    };

    return (
        <div className="content">
            <div className="classname" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="title">
                    <h2>Software Engineering</h2>
                </div>
                <div className="classdescbutton" style={classDescButtonStyle}>
                    <a href="classdesc.html" className="classdesc">
                        <span className="text" style={{ fontSize: "13px" }}>Description</span>
                    </a>
                </div>
            </div>
            {/* Announcements */}
            {/* ... (Omitted for brevity) */}
            {/* Lecture functions */}
            <div className="buttonholder" style={{ display: "flex", width: "100%" }}>
                {/* Add Module Link */}
                <div className="addbutton">
                    <a href="addmodule.html" className="addmodule" style={editButtonStyle}>
                        <i className="fa-solid fa-pen" style={iconStyle}></i>
                        <span className="text">Add module</span>
                    </a>
                </div>
                {/* Add Announcement Link */}
                <div className="addbutton">
                    <a href="add_announcement.html" className="addannouncement" style={editButtonStyle}>
                        <i className="fa-solid fa-pen" style={iconStyle}></i>
                        <span className="text">Add announcement</span>
                    </a>
                </div>
                <div className="addbutton">
                    <a href="lect_grade.html" className="lectgrade" style={editButtonStyle}>
                        <i className="fa-solid fa-pen" style={iconStyle}></i>
                        <span className="text">Grade Assignment</span>
                    </a>
                </div>
            </div>
            {/* Modules */}
            <ul className="modulelist">
                <li className="modules">
                    <div className="module_button" style={{ display: "flex", justifyContent: "end" }}>
                        <div className="editbutton">
                            <a href="ind_moduleedit.html" className="edit" style={editButtonStyle}>
                                <i className="fa-solid fa-pen" style={iconStyle}></i>
                                <span className="text">Edit</span>
                            </a>
                        </div>
                    </div>
                    <div className="module-head">
                        <input type="checkbox" id="module1" />
                        <label htmlFor="module1">
                            <span>Module name</span>
                            <div className="icon"><i className="fa-solid fa-caret-right"></i></div>
                        </label>
                        <div className="module-content">
                            <div className="submodule-head">
                                <input type="checkbox" id="material" />
                                <label htmlFor="material">
                                    <span>Material</span>
                                    <div className="icon"><i className="fa-solid fa-caret-right"></i></div>
                                </label>
                                <div className="module-content">
                                    <ul className="materiallist" style={listStyle}>
                                        {materialList.map((material, index) => (
                                            <li key={index}>{material}</li>
                                        ))}
                                    </ul>
                                    <button onClick={addMaterial} style={addButtonStyle}>+</button>
                                </div>
                            </div>
                            <div className="submodule-head">
                                <input type="checkbox" id="assignment" />
                                <label htmlFor="assignment">
                                    <span>Assignments</span>
                                    <div className="icon"><i className="fa-solid fa-caret-right"></i></div>
                                </label>
                                <div className="module-content">
                                    <ul className="assignmentlist" style={listStyle}>
                                        {assignmentList.map((assignment, index) => (
                                            <li key={index} style={assignmentElementStyle}>
                                                <span className="assignment">{assignment}</span>
                                                <button className="grade">grade</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={addAssignment} style={addButtonStyle}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default LectClassContent;
