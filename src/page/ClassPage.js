import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import ClassContent from '../components/ClassContent';

function ClassPage(){
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <ClassContent/>
        </div>
    );
}

export default ClassPage;