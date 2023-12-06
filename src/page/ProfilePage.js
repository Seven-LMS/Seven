import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const searchParams = new URLSearchParams(window.location.search);
const userData = sessionStorage.getItem('userData');

function ProfilePage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Profile
            userData={userData}/>
        </div>
    );
}

export default ProfilePage;