import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import Grade from '../components/Grade';

const searchParams = new URLSearchParams(window.location.search);
const classId = searchParams.get('classId');

function GradePage(){
    console.log(classId)
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <Grade
            classId={classId}/>
        </div>
    );
}

export default GradePage;