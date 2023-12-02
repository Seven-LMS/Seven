import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'

const searchParams = new URLSearchParams(window.location.search);
const classId = searchParams.get('classId');

function Gradepage(){
    console.log(classId)
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            {/* logic goes here */}
        </div>
    );
}

export default Gradepage;