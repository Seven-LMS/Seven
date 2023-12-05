import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <div className="header">
            <ul>
                <a href="HomePage">
                    <i>
                        <FontAwesomeIcon icon={faSchoolFlag}/>
                    </i>
                </a>
            </ul>
            <ul>
                <a href="ProfilePage">
                    <i>
                    <FontAwesomeIcon icon={faUser}/>
                    </i>
                </a>
            </ul>
        </div>
    );
}

export default Header;