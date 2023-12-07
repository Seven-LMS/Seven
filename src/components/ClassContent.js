import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faPen, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "../style/style.css";

function ClassContent({classId}) {
    const [announcement, setAnnouncement] = useState([]);
    const [clas, setClass] = useState([]);
    const [modules, setModules] = useState([]);
    const [assignment, setAssignments] = useState([]);
    const [material, setMaterials] = useState([]);
    const [expandedAllAnnouncements, setExpandedAllAnnouncements] = useState(false);
    const storedUserType = sessionStorage.getItem('userType');
    const [userType, setUserType] = useState(storedUserType);

    useEffect(() => {
        axios.get('http://localhost:3005/getCourseAnnouncement/' + classId)
            .then(res => {
                console.log(res.data);
                setAnnouncement(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3005/getClass/' + classId)
            .then(res => {
                console.log(res.data);
                setClass(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3005/getModules/' + classId)
            .then(res => {
                console.log(res.data);
                setModules(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3005/getAssignments/' + classId)
        .then(res => {
            console.log(res.data);
            setAssignments(res.data);
        })
        .catch(err => console.log(err));

        axios.get('http://localhost:3005/getMaterials/' + classId)
        .then(res => {
            console.log(res.data);
            setMaterials(res.data);
        })
        .catch(err => console.log(err));
    }, [classId]);
    
    const handleExpandAllAnnouncements = () => {
        setExpandedAllAnnouncements(!expandedAllAnnouncements);
    };
    
    const addMaterial = () => {
        // Logic to handle adding material
        // For example, you can redirect to another page
        window.location.href = "add_material.html";
      };      

    return (
        <div className="content">
            {clas.length > 0 ? (
                <div className="classname">{clas[0].name}</div>
            ) : null}
            <div class="classdescbutton">
                <a href="classdesc.html" class="classdesc">
                    <span class="text" style={{fontSize:'13px'}}>Description</span>
                </a>
            </div>
            <div className="class-announcement">
                <div className="head">
                    <h3>Announcements</h3>
                </div>
                <ul className="classannlist">
                    {announcement.map((item, index) => (
                        <li className="Ann1" key={index} style={{ textAlign: 'left', maxHeight: expandedAllAnnouncements ? 'none' : '1em', overflow: 'hidden' }}>
                            <FontAwesomeIcon icon={faSquareCheck} />
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>

                <div className="seemorebutton" style={{ textAlign: 'center' }}>
                    <a href="#" onClick={handleExpandAllAnnouncements}>
                        {expandedAllAnnouncements ? "See less" : "See more"}
                    </a>
                </div>
            </div>

            {userType == 'lecturer' && (<div class="buttonholder" style={{display: 'flex', width: '100%'}}>
                <div class="addbutton">
                    <a href= "/AddModulePage" class="addmodule">
                     <i class="fa-solid fa-pen"><FontAwesomeIcon icon={faPen} /></i>
                        <span class="text">Add module</span>
                    </a>
                </div>
                <div class="addbutton">
                    <a href="/AddAnnouncementPage" class="addannouncement">
                        <i class="fa-solid fa-pen"><FontAwesomeIcon icon={faPen} /></i>
                        <span class="text">Add announcement</span>
                    </a>
                </div>
                <div class="addbutton">
                    <a href={"/GradePage?classId="+classId} class="lectgrade">
                     <i class="fa-solid fa-pen"><FontAwesomeIcon icon={faPen} /></i>
                        <span class="text">Grade Assignment</span>
                    </a>
                </div>
            </div>)}

            <ul className="modulelist">
                {modules.map((module) => (
                    <li className="modules" key={module.modid}>
                        <div class="module_button" style={{ display: 'flex', justifyContent:'end' }}>
                            {userType == 'lecturer' && (<div class="editbutton">
                                <a href="ind_moduleedit.html" class="edit">
                                    <i class="fa-solid fa-pen"><FontAwesomeIcon icon={faPen} /></i>
                                    <span class="text">Edit</span>
                                </a>
                            </div>)}
                        </div>
                        <div className="module-head">
                            <input type="checkbox" id={`module${module.modid}`} />
                            <label htmlFor={`module${module.modid}`}>
                                <span>{module.name}</span>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </div>
                            </label>
                            <div className="module-content">
                                {/* Dynamic rendering of materials for this module */}
                                <ul className="materiallist">
                                    {material.map((material) => (
                                        material.modid === module.modid && (
                                        <li className="materials" key={material.matid}>
                                            <div className="submodule-head">
                                                <input type="checkbox" id={`mat${material.matid}`} />
                                                <label htmlFor={`mat${material.matid}`}>
                                                    <span>{material.name}</span>
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={faCaretRight} />
                                                    </div>
                                                </label>
                                                <div className="module-content">
                                                    <p>{material.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    ))}
                                    <button onclick="addMaterial()" style={{padding: '0 5px', marginTop: '5px', marginBottom: '5px'}}>+</button>
                                </ul>
                                {/* Dynamic rendering of assignments for this module */}
                                <ul className="assignmentlist">
                                    {assignment.map((assignment) => (
                                        assignment.modid === module.modid && (
                                        <li className="assignments" key={assignment.assid}>
                                            <div className="submodule-head">
                                                <input type="checkbox" id={`ass${assignment.assid}`} />
                                                <label htmlFor={`ass${assignment.assid}`}>
                                                    <span>{assignment.name}</span>
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={faCaretRight} />
                                                    </div>
                                                </label>
                                                <div className="module-content">
                                                    <p>{assignment.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClassContent;