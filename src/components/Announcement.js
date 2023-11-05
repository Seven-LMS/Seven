import React, { useState, useEffect } from "react";
import axios from "axios";

function Announcement() {
    const [announcements, setAnnouncements] = useState([]);
    const [expandedAnnouncements, setExpandedAnnouncements] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/getAnnouncement')
            .then(res => setAnnouncements(res.data))
            .catch(err => console.log(err));
    }, []);

    const formatDate = (datetime) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(datetime).toLocaleDateString(undefined, options);
    };

    const handleExpand = (index) => {
        if (expandedAnnouncements.includes(index)) {
            setExpandedAnnouncements(expandedAnnouncements.filter((item) => item !== index));
        } else {
            setExpandedAnnouncements([...expandedAnnouncements, index]);
        }
    };

    const isExpanded = (index) => {
        return expandedAnnouncements.includes(index);
    };

    return (
        <div className="content">
            <div className="title">
                <h2>Announcement</h2>
            </div>
            <div className="announcements">
                <ul className="annpagelist">
                    {announcements.map((announcement, index) => (
                        <li className="Ann1" key={index}>
                            <div className="left">
                                <div className="date"><h3>{formatDate(announcement.datePosted)}</h3></div>
                                <div className="anninfo">
                                    <div className="anntext" style={{ textAlign: 'left', maxHeight: isExpanded(index) ? 'none' : '4em', overflow: 'hidden' }}>
                                        <h3>{announcement.name} posted by {announcement.poster}</h3>
                                        <p>
                                            {announcement.content}
                                        </p>
                                    </div>
                                    <div className="seemorebutton" style={{ textAlign: 'right' }}>
                                        <a href="#" onClick={() => handleExpand(index)}>
                                            {isExpanded(index) ? "See less" : "See more"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="annstatus">
                                <i className="fa-solid fa-square-check"></i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Announcement;
