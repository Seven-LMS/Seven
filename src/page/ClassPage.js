import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import ClassContent from '../components/ClassContent';

const searchParams = new URLSearchParams(window.location.search);
const classId = searchParams.get('classId');

function ClassPage(){
    console.log(classId)
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <ClassContent
            classId={classId}/>
        </div>
    );
}

export default ClassPage;