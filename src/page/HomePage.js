import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';

function HomePage(){
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <Home/>
        </div>
    );
}

export default HomePage;