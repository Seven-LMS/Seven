import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import axios from "axios";

function ClassContent({classId}) {
    const [announcement, setAnnouncement] = useState([]);
    const [clas, setClass] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/getAnnouncement/'+classId)
            .then(res => {
                console.log(res.data)
                setAnnouncement(res.data)})
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3005/getClass/'+classId)
            .then(res => {
                console.log(res.data)
                setClass(res.data)})
            .catch(err => console.log(err));
    }, []);

    return (
        <div class="content">
            {clas.length > 0 ? (
                <div className="classname">{clas[0].name}</div>
                ) : null}
                <div class="class-announcement">
                    <div class="head"><h3>Announcements</h3></div>
                        <ul class="classannlist">
                            <li class="Ann1"><i><FontAwesomeIcon icon={faSquareCheck}/></i><p>subject 1</p></li>
                            <li class="Ann2"><i><FontAwesomeIcon icon={faCircleExclamation}/></i><p>module 1</p></li>
                            <li class="Ann2"><i><FontAwesomeIcon icon={faCircleExclamation}/></i><p>module 1</p></li>
                            <li class="Ann2"><i><FontAwesomeIcon icon={faCircleExclamation}/></i><p>module 1</p></li>
                            <li class="Ann2"><i><FontAwesomeIcon icon={faCircleExclamation}/></i><p>module 1</p></li>
                        </ul>
                </div>
            <div class="modules">Modules</div>
        </div>
    );
}

export default ClassContent;