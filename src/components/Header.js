import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <div className="header">
            <ul><a href=""><FontAwesomeIcon icon={faSchoolFlag}/></a></ul>
            <ul><a href=""><FontAwesomeIcon icon={faUser}/></a></ul>
        </div>
    );
}

export default Header;