// AddAnnouncementcontent.js

import React, { useState } from "react";

function AddAnnouncement() {
    // Styles
    const contentStyle = {
        paddingTop: "20px",
    };

    const formStyle = {
        width: "100%",
    };

    const titleStyle = {
        alignItems: "center",
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
        minHeight: "250px",
        padding: "5px",
        overflowY: "auto",
    };

    const buttonStyle = {
        position: "fixed",
        bottom: "30px",
        right: "30px",
    };
    const [announcement, setAnnouncement] = useState({
        title: "",
        content: "",
    });

    const postAnnouncement = () => {
        // Get values from the form
        const { title, content } = announcement;

        // Get the current time
        const currentTime = new Date();
        const timestamp = currentTime.toLocaleString();

        // Save the announcement to the database (send to the server)
        saveAnnouncementToDatabase(title, content, timestamp);

        // Show the popup
        alert("Announcement posted!");

        // Redirect to lect_classpage.html
        window.location.href = "lect_classpage.html";
    };

    const saveAnnouncementToDatabase = (title, content, timestamp) => {
        // Here, you can use Ajax or fetch API to send data to the server
        // Example using fetch API
        fetch('/save-announcement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, timestamp }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response if needed
                console.log('Announcement saved to the database:', data);
            })
            .catch(error => {
                console.error('Error saving announcement:', error);
            });
    };

    const autoResizeTextArea = (textarea) => {
        // Auto-resize the textarea based on its content
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    };

    return (
        <div className="content" style={contentStyle}>
            <div className="announcement-form" style={formStyle}>
                <h2>Classname - Announcement</h2>
                <form id="announcementForm" style={{ fontSize: "13px", marginTop: "10px" }}>
                    <div className="anntitle" style={titleStyle}>
                        <label htmlFor="announcementTitle" style={labelStyle}>
                            Title:
                        </label>
                        <input
                            type="text"
                            id="announcementTitle"
                            name="announcementTitle"
                            required
                            style={inputStyle}
                            onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                        />
                    </div>

                    <div className="anncontent" style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="announcementContent" style={labelStyle}>
                            Content:
                        </label>
                        <textarea
                            id="announcementContent"
                            name="announcementContent"
                            required
                            style={textareaStyle}
                            onInput={(e) => {
                                autoResizeTextArea(e.target);
                                setAnnouncement({ ...announcement, content: e.target.value });
                            }}
                        ></textarea>
                    </div>

                    <button type="button" onClick={postAnnouncement} style={buttonStyle}>
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddAnnouncement;