import React, { useState } from "react";
import "../style/style.css";

const styles = {
  content: {
    width: "82%",
    alignItems: "left",
    marginLeft: "16%",
  },
  title: {
    fontSize: "20px",
    marginBottom: "15px",
    textAlign: "left",
    fontSize: "15px",
    padding: "10px 0 0 0",
  },
  label: {
    display: "block",
    marginTop: "10px",
    fontSize: "13px",
    textAlign: "left",
  },
  h3: {
    fontSize: "16px",
    marginBottom: "5px",
    textAlign: "left",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px", // Add padding below Module Name input
  },
  input: {
    marginTop: "5px",
    marginLeft: "10px", // Add margin to separate the input from the label
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
  li: {
    marginBottom: "5px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  a: {
    marginTop: "5px",
    textDecoration: "none",
    color: "#333",
  },
  button: {
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "11.5px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "7px",
    padding: "3px",
    marginRight: "5px",
  },
  plusButton: {
    float: "right",
  },
  saveButton: {
    position: "fixed",
    right: "30px",
    bottom: "30px",
  },
  customPopup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
  },
};

const EditModule = () => {
  const [materials, setMaterials] = useState(["Material 1", "Material 2"]);
  const [assignments, setAssignments] = useState(["Assignment 1", "Assignment 2"]);
  const [newModuleName, setNewModuleName] = useState("Software Engineering");
  const [popupText, setPopupText] = useState("");

  const addMaterial = () => {
    const materialName = prompt("Enter Material Name:");
    if (materialName) {
      setMaterials((prevMaterials) => [...prevMaterials, materialName]);
    }
  };

  const addAssignment = () => {
    const assignmentName = prompt("Enter Assignment Name:");
    if (assignmentName) {
      setAssignments((prevAssignments) => [...prevAssignments, assignmentName]);
    }
  };

  const deleteMaterial = (index) => {
    const updatedMaterials = [...materials];
    updatedMaterials.splice(index, 1);
    setMaterials(updatedMaterials);
  };

  const deleteAssignment = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  const showPopup = (message) => {
    setPopupText(message);
    setTimeout(() => {
      setPopupText("");
    }, 2000);
  };

  const saveChanges = () => {
    showPopup(`Changes saved! New Module Name: ${newModuleName}`);
  };

  return (
    <div style={styles.content}>
      <div style={styles.title}>
        <h2>Edit Module - {newModuleName}</h2>
      </div>

      {/* Module Name Input */}
      <div style={styles.inputContainer}>
        <label htmlFor="moduleName" style={styles.label}>
          Module Name:
        </label>
        <input
          type="text"
          id="moduleName"
          value={newModuleName}
          onChange={(e) => setNewModuleName(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Material List */}
      <div style={styles.ul}>
        <h3 style={styles.h3}>
          Material List
          <a href="/AddMaterialPage" style={{ ...styles.button, ...styles.plusButton }}>
            +
          </a>
        </h3>
        <ul>
          {materials.map((material, index) => (
            <li key={index} style={styles.li}>
              <button onClick={() => deleteMaterial(index)} style={styles.deleteButton}>
                -
              </button>
              <a href="material_page.html" style={styles.a}>
                {material}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Assignment List */}
      <div style={styles.ul}>
        <h3 style={styles.h3}>
          Assignment List
          <button onClick={addAssignment} style={{ ...styles.button, ...styles.plusButton }}>
            +
          </button>
        </h3>
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index} style={styles.li}>
              <button onClick={() => deleteAssignment(index)} style={styles.deleteButton}>
                -
              </button>
              <a href="assignment_page.html" style={styles.a}>
                {assignment}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Save Button */}
      <button onClick={saveChanges} style={styles.saveButton}>
        Save Changes
      </button>

      {/* Custom Popup */}
      {popupText && (
        <div style={styles.customPopup}>
          <p>{popupText}</p>
        </div>
      )}
    </div>
  );
};

export default EditModule;
