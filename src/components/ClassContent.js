import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function ClassContent() {
    return (
        <div class="content">
            <div class="classname">Software Engineering</div>
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