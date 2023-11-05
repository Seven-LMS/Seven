import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const listItemStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginBottom: "5px",
    padding: "5px",
    fontSize: "10px",
    textAlign: "left",
};

const iconStyle = {
    marginRight: "10px",
    fontSize: "12px",
};

const titleStyle = {
    textAlign: "left", 
};

function CoursePick() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/getCourses')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="content">
            <div className="title" style={titleStyle}>
                <h3>Courses</h3>
            </div>
            <div className="allcourse">
                <ul className="allcourselist">
                    {data.map((course, index) => (
                        <li className="class1" key={index} style={listItemStyle}>
                            <i className="fa-solid fa-square-check" style={iconStyle}><FontAwesomeIcon icon={faSquareCheck}/></i>
                            <div className="classinfo">
                                <h3>{course.name}</h3>
                                <p>{`${course.semester}/${course.year}`}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CoursePick;
