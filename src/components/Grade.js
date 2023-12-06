import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "../style/style.css";

function Grade({classId}) {
    const saveGrades = () => {
        // Logic to handle adding material
        // For example, you can redirect to another page
        window.location.href = "add_material.html";
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
          <tr>
            <td style={{ textAlign: "center" }}>001</td>
            <td style={{ textAlign: "center" }}>John Doe</td>
            <td style={{ textAlign: "center" }}>
              <input type="text" name="grade" style={{ width: "100%", border: "none", background: "transparent", textAlign: "center" }} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>002</td>
            <td style={{ textAlign: "center" }}>Jane Smith</td>
            <td style={{ textAlign: "center" }}>
              <input type="text" name="grade" style={{ width: "100%", border: "none", background: "transparent", textAlign: "center" }} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="save-button" style={{ position: "fixed", right: "30px", bottom: "30px" }}>
        <button onClick={saveGrades}>Save</button>
      </div>
    </div>
  );
}

export default Grade;
