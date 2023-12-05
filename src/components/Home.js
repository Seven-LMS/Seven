import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Home({userData}) {
    const [clas, setClass] = useState([]);
    const [announcement, setAnnouncements] = useState([]);
    const [assignment, setAssignments] = useState([]);

    useEffect(() => {
        // Check the user type from the session
        const userType = sessionStorage.getItem('userType');
    
        // Choose the API endpoint based on the user type
        const apiEndpoint = userType === 'lecturer' ? 'getCoursesLecturer' : 'getCourses';
    
        axios.get(`http://localhost:3005/${apiEndpoint}/${userData}`)
            .then((response) => {
                setClass(response.data);
                console.log(response.data);
                console.log(userData);
            })
            .catch((error) => {
                console.error('Error fetching class:', error);
            });
    }, [userData]);    

    useEffect(() => {
        axios.get('http://localhost:3005/getAnnouncement')
            .then(res => setAnnouncements(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3005/getAssignments/')
            .then(res => {
                setAssignments(res.data);
            })
            .catch(err => console.log(err));
    });


    const formatDate = (datetime) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(datetime).toLocaleDateString(undefined, options);
    };

    const annListStyle = {
        width: '100%',
    };

    const listItemStyle = {
        width: '225px',
        marginBottom: '10px',
        backgroundColor: 'white',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderColor: 'var(--bgc)',
        padding: '7px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px',
    };

    const paragraphStyle = {
        fontSize: '14px',
    };

    const iconStyle = {
        marginRight: '3px',
    };

    return (
        <div className="content">
            <div className="classes">
                <div className="head">
                    <h3>Courses</h3>
                    <div className="viewbutton">
                        <a href="CoursePickPage" className="viewallclass" >
                            <i><FontAwesomeIcon icon={faGripLines} style={iconStyle} /></i>
                            <span className="text">view all</span>
                        </a>
                    </div>
                </div>
                <ul className="classlist" style={{textAlign:"left"}}>
                    {clas.map((cls, index) => ( 
                        <li key={index}>
                            <a href={"ClassPage?classId="+cls.cid}>
                                <i className="#">{/* Add your class icon here */}</i>
                                <span className="text">
                                    <h3>{cls.name}</h3>
                                    <p>{cls.year}</p>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="listeditems">
                <div className="announcement">
                    <div className="head">
                    <h3>Announcements</h3>
                    <div className="viewbutton">
                        <a href="AnnouncementPage" className="viewannouncements">
                        <i><FontAwesomeIcon icon={faGripLines} style={iconStyle} /></i>
                        <span className="text">view all</span>
                        </a>
                    </div>
                    </div>
                    <ul className="annlist" style={annListStyle}>
                    {announcement.map((announcement, index) => (
                        <li className={`Ann${index % 2 === 0 ? 1 : 2}`} style={listItemStyle}>
                        <p style={paragraphStyle}>{announcement.title}</p>
                        <i><FontAwesomeIcon icon={faSquareCheck} style={iconStyle}/></i>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="event">
                    <div className="head"><h3>Upcoming Assignments</h3></div>
                    <ul className="eventlist">
                    {assignment.map((assignment, index) => (
                        <li className={`Ann${index % 2 === 0 ? 1 : 2}`}>
                        <i><FontAwesomeIcon icon={faCalendar} style={iconStyle} /></i>
                        <p>{assignment.name}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
        </div>
    );
}

export default Home;