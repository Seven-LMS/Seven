import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchoolFlag, faBell, faMessage, faGear } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    const sidebarStyle = {
        // Define styles as needed
        position: 'fixed',
        left: '0',
        top: '50px',
        width: '230px',
        height: '100%',
        background: 'var(--bgc)', // Ensure --bgc is defined somewhere
    };

    const listLinkStyle = {
        display: 'block',
        height: '100%',
        width: '100%',
        lineHeight: '50px',
        fontSize: '16px',
        color: 'azure',
        paddingLeft: '30px',
        boxSizing: 'border-box',
        fontFamily: 'EB Garamond, serif',
        textAlign: 'left',
    };

    const iconStyle = {
        marginRight: '2px',
    };

    return (
        <div className="sidebar" style={sidebarStyle}>
            <header>Welcome!</header>
            <ul>
                <li>
                    <a href="HomePage" style={listLinkStyle}>
                        <i>
                            <FontAwesomeIcon icon={faSchoolFlag} style={iconStyle} /> 
                        </i>Homepage
                    </a>
                </li>
                <li>
                    <a href="AnnouncementPage" style={listLinkStyle}>
                        <i>
                            <FontAwesomeIcon icon={faBell} style={iconStyle} />
                        </i>Announcements
                    </a>
                </li>
                <li>
                    <a href="MessagePage" style={listLinkStyle}>
                        <i>
                            <FontAwesomeIcon icon={faMessage} style={iconStyle} />
                        </i>Message
                    </a>
                </li>
                <li>
                    <a href="SettingPage" style={listLinkStyle}>
                        <i>
                            <FontAwesomeIcon icon={faGear} style={iconStyle} />
                        </i>Settings
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;