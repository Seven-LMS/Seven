// coursescontent.js

import React from "react";

const LectHome = () => {
    // Styles
    const viewButtonStyle = {
        display: "flex",
        alignItems: "center",
    };

    const listStyle = {
        listStyleType: "none",
        padding: "0",
    };

    return (
        <div className="content">
            <div className="classes">
                <div className="head">
                    <h3>Courses</h3>
                    <div className="viewbutton" style={viewButtonStyle}>
                        <a href="coursepick.html" className="viewallclass">
                            <i className="fa-solid fa-grip-lines"></i>
                            <span className="text">view all</span>
                        </a>
                    </div>
                </div>
                <ul className="classlist" style={listStyle}>
                    <li>
                        <a href="class_page.html">
                            <i className="#"></i>
                            <span className="text">
                                <div className="classname">Class 1</div>
                                <p>fall 2023</p>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="listeditems">
                <div className="announcement">
                    <div className="head">
                        <h3>Announcements</h3>
                        <div className="viewbutton" style={viewButtonStyle}>
                            <a href="announcements.html" className="viewannouncements">
                                <i className="fa-solid fa-grip-lines"></i>
                                <span className="text">view all</span>
                            </a>
                        </div>
                    </div>
                    <ul className="annlist" style={listStyle}>
                        <li className="Ann1">
                            <p>subject 1</p><i className="fa-solid fa-square-check"></i>
                        </li>
                        <li className="Ann2">
                            <p>module 1</p><i className="fa-solid fa-square-check"></i>
                        </li>
                        <li className="Ann2">
                            <p>module 1</p><i className="fa-solid fa-circle-exclamation"></i>
                        </li>
                        <li className="Ann2">
                            <p>module 1</p><i className="fa-solid fa-circle-exclamation"></i>
                        </li>
                        <li className="Ann2">
                            <p>module 1</p><i className="fa-solid fa-circle-exclamation"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LectHome;
