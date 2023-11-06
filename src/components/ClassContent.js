import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function ClassContent({ classId }) {
    const [announcement, setAnnouncement] = useState([]);
    const [clas, setClass] = useState([]);
    const [modules, setModules] = useState([]);
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
                            <i className="fa-square-check"></i>
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
                <li className="modules">
                    <div className="module-head">
                        <input type="checkbox" id="module1" />
                        <label htmlFor="module1">
                            <span>Module name</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={faSquareCheck} />
                            </div>
                        </label>
                        <div className="module-content">
                            {/* Your other module content */}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ClassContent;
