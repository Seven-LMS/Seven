// lectmaterialcontent.js

import React, { useState } from "react";

function AddMaterial() {
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
        minHeight: "250px",
        padding: "5px",
        overflowY: "auto",
    };

    const fileInputStyle = {
        alignItems: "center",
    };

    const buttonStyle = {
        position: "fixed",
        bottom: "30px",
        right: "30px",
    };

    const [material, setMaterial] = useState({
        materialName: "",
        materialDetails: "",
        attachmentFile: "",
    });

    const postMaterial = () => {
        // Get values from the form
        const { materialName, materialDetails, attachmentFile } = material;

        // Save the material to the database (send to the server)
        saveMaterialToDatabase(materialName, materialDetails, attachmentFile);

        // Show the popup
        alert("Material posted!");

        // Redirect to lect_classpage.html
        window.location.href = "lect_classpage.html";
    };

    const saveMaterialToDatabase = (name, details, attachment) => {
        // Here, you can use Ajax or fetch API to send data to the server
        // Example using fetch API
        fetch('/save-material', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, details, attachment }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response if needed
                console.log('Material saved to the database:', data);
            })
            .catch(error => {
                console.error('Error saving material:', error);
            });
    };

    return (
        <div className="content" style={contentStyle}>
            <div className="material-form" style={formStyle}>
                <h2>Classname - Add Material</h2>
                <form id="materialForm">
                    <div className="materialname" style={labelStyle}>
                        <label htmlFor="materialName">Material Name:</label>
                        <input
                            type="text"
                            id="materialName"
                            name="materialName"
                            required
                            style={inputStyle}
                            onChange={(e) => setMaterial({ ...material, materialName: e.target.value })}
                        />
                    </div>

                    <div className="materialdetails" style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="materialDetails" style={labelStyle}>
                            Details:
                        </label>
                        <textarea
                            id="materialDetails"
                            name="materialDetails"
                            required
                            style={textareaStyle}
                            onChange={(e) => setMaterial({ ...material, materialDetails: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="materialattachment" style={fileInputStyle}>
                        <label htmlFor="attachmentFile">Attachment:</label>
                        <input
                            type="file"
                            id="attachmentFile"
                            name="attachmentFile"
                            onChange={(e) => setMaterial({ ...material, attachmentFile: e.target.value })}
                        />
                    </div>

                    <button type="button" onClick={postMaterial} style={buttonStyle}>
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}
export default AddMaterial;
