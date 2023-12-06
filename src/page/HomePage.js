import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';

const searchParams = new URLSearchParams(window.location.search);
//const userData = searchParams.get('userData');
const userData = sessionStorage.getItem('userData');

function HomePage(){
    return(
        <div className="App">
            <Header/>
            <Sidebar/>
            <Home
            userData={userData}/>
        </div>
    );
}

export default HomePage;