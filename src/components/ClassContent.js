import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function ClassContent({ classId }) {
    const [announcement, setAnnouncement] = useState([]);
    const [clas, setClass] = useState([]);
    const [modules, setModules] = useState([]);
    const [assignment, setAssignments] = useState([]);
    const [material, setMaterials] = useState([]);
    const [expandedAllAnnouncements, setExpandedAllAnnouncements] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3005/getAnnouncement/' + classId)
            .then(res => {
                console.log(res.data);
                setAnnouncement(res.data);
            })
            .catch(err => console.log(err));
    }, [classId]);

    useEffect(() => {
        axios.get('http://localhost:3005/getClass/' + classId)
            .then(res => {
                console.log(res.data);
                setClass(res.data);
            })
            .catch(err => console.log(err));
    }, [classId]);

    useEffect(() => {
        axios.get('http://localhost:3005/getModules/' + classId)
            .then(res => {
                console.log(res.data);
                setModules(res.data);
            })
            .catch(err => console.log(err));
    }, [classId]);

    useEffect(() => {
        axios.get('http://localhost:3005/getAssignments/' + classId)
            .then(res => {
                console.log(res.data);
                setAssignments(res.data);
            })
            .catch(err => console.log(err));
    }, [classId]);

    useEffect(() => {
        axios.get('http://localhost:3005/getMaterials/' + classId)
            .then(res => {
                console.log(res.data);
                setMaterials(res.data);
            })
            .catch(err => console.log(err));
    }, [classId]);

    const handleExpandAll = () => {
        setExpandedAllAnnouncements(!expandedAllAnnouncements);
    };

    return (
        <div className="content">
            {clas.length > 0 ? (
                <div className="classname">{clas[0].name}</div>
            ) : null}
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
                    <a href="#" onClick={handleExpandAll}>
                        {expandedAllAnnouncements ? "See less" : "See more"}
                    </a>
                </div>
            </div>

            <ul className="modulelist">
                {modules.map((module) => (
                    <li className="modules" key={module.modid}>
                        <div className="module-head">
                            <input type="checkbox" id={`module${module.modid}`} />
                            <label htmlFor={`module${module.modid}`}>
                                <span>{module.name}</span>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquareCheck} />
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
                                                        <FontAwesomeIcon icon={faSquareCheck} />
                                                    </div>
                                                </label>
                                                <div className="module-content">
                                                    <p>{material.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    ))}
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
                                                        <FontAwesomeIcon icon={faSquareCheck} />
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