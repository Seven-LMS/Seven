import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

function ProfilePage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Profile/>
        </div>
    );
}

export default ProfilePage;