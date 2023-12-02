// stdgradecontent.js

import React from "react";

function StdGrade() {
    const gradeStyle = {
        width: "75%",
    };

    const gradeheadStyle = {
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid #333366",
        borderBottom: "none",
        padding: "10px 10px 10px 10px",
        fontWeight: 500,
        fontSize: 13,
    };

    const gradelistStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px 0px 10px",
    };

    const taskscoreStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        fontSize: 12,
    };

    const width20PercentStyle = {
        width: "20%",
        textAlign: "center",
    };

    const width60PercentStyle = {
        width: "60%",
    };

    const totalsFinalgradeStyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 12px",
    };

    const totalsStyle = {
        marginBottom: 5,
        borderBottom: "2px solid #333366",
    };

    return (
        <div className="content">
            <div className="title">
                <h2>Grade</h2>
            </div>
            <div className="grade" style={gradeStyle}>
                <div className="gradehead" style={gradeheadStyle}>
                    <div className="taskname" style={width60PercentStyle}>
                        Name
                    </div>
                    <div className="taskweight" style={width20PercentStyle}>
                        Weight
                    </div>
                    <div className="score" style={width20PercentStyle}>
                        Score
                    </div>
                </div>
                <ul className="gradelist" style={gradelistStyle}>
                    <li className="task1">
                        <div className="taskscore" style={taskscoreStyle}>
                            <div className="taskname" style={width60PercentStyle}>
                                Assignment 1
                            </div>
                            <div className="taskweight" style={width20PercentStyle}>
                                xx%
                            </div>
                            <div className="score" style={width20PercentStyle}>
                                xx
                            </div>
                        </div>
                    </li>
                    <li className="task2">
                        <div className="taskscore" style={taskscoreStyle}>
                            <div className="taskname" style={width60PercentStyle}>
                                Assignment 2
                            </div>
                            <div className="taskweight" style={width20PercentStyle}>
                                xx%
                            </div>
                            <div className="score" style={width20PercentStyle}>
                                xx
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="totals" style={totalsStyle}>
                    <div className="totalhead">
                        <h3>Total</h3>
                    </div>
                    <div className="totalweight" style={width20PercentStyle}>
                        100%
                    </div>
                    <div className="totalscore" style={width20PercentStyle}>
                        xx
                    </div>
                </div>
                <div className="finalgrade" style={totalsFinalgradeStyle}>
                    <div className="fgradehead">
                        <h3>Grade</h3>
                    </div>
                    <div className="gradeoutput">A</div>
                </div>
            </div>
        </div>
    );
}

export default StdGrade;