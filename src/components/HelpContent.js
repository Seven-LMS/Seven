import React from "react";

function HelpContent() {
    // Styles
    const contentStyle = {
        display: "flex",
        flexDirection: "column",
    };

    const titleStyle = {
        marginBottom: "10px",
    };

    const helpItemStyle = {
        width: "100%",
        padding: "10px",
    };
    return (
        <div className="content" style={contentStyle}>
            <div className="title" style={titleStyle}>
                <h3>Help</h3>
            </div>
            <div className="helpreport" style={helpItemStyle}>
                <h2>Report Issues</h2>
                <p>Fill data in link to report your issues</p>
            </div>
            <div className="helpfeedback" style={helpItemStyle}>
                <h2>Provide Feedback</h2>
                <p>Fill data in link to provide feedback</p>
            </div>
        </div>
    );
}

export default HelpContent;
