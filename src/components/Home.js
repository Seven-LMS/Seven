import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faSquareCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

function Home() {
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
            <div class="classes">
            <div class="head">
                <h3>Courses</h3>
                <div class="viewbutton">
                    <a href="CoursePickPage" class="viewallclass" >
                        <i><FontAwesomeIcon icon={faGripLines} style={iconStyle}/></i>
                        <span class="text">view all</span>
                    </a>
                </div>
            </div>
            <ul class="classlist">
                <li><a href="ClassPage"><i class="#"></i><span class="text"><h3></h3><p>Class 1</p></span></a></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 2</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 3</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 4</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 3</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 4</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 4</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 3</p></span></li>
                <li><i class="#"></i><span class="text"><h3></h3><p>Class 4</p></span></li>
            </ul>
        </div>
        <div class="listeditems">
            <div class="announcement">
                <div class="head">
                    <h3>Announcements</h3>
                    <div class="viewbutton">
                        <a href="AnnouncementPage" class="viewannouncements" >
                            <i><FontAwesomeIcon icon={faGripLines} style={iconStyle}/></i>
                            <span class="text">view all</span>
                        </a>
                    </div>
                </div>
                <ul class="annlist" style={annListStyle}>
                    <li class="Ann1" style={listItemStyle}><p style={paragraphStyle}>subject 1</p><i><FontAwesomeIcon icon={faSquareCheck} style={iconStyle}/></i></li>
                    <li class="Ann2" style={listItemStyle}><p style={paragraphStyle}>module 1</p><i><FontAwesomeIcon icon={faSquareCheck} style={iconStyle}/></i></li>
                    <li class="Ann2" style={listItemStyle}><p style={paragraphStyle}>module 1</p><i><FontAwesomeIcon icon={faCircleExclamation} style={iconStyle}/></i></li>
                    <li class="Ann2" style={listItemStyle}><p style={paragraphStyle}>module 1</p><i><FontAwesomeIcon icon={faCircleExclamation} style={iconStyle}/></i></li>
                    <li class="Ann2" style={listItemStyle}><p style={paragraphStyle}>module 1</p><i><FontAwesomeIcon icon={faCircleExclamation} style={iconStyle}/></i></li>
                </ul>
            </div>
            <div class="event">
                <div class="head"><h3>Upcoming Events</h3></div>
                <ul class="eventlist">
                    <li class="Ann1"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>subject 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                    <li class="Ann2"><i><FontAwesomeIcon icon={faCalendar} style={iconStyle}/></i><p>module 1</p></li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Home;