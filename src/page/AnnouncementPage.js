import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Announcement from "../components/Announcement";

const searchParams = new URLSearchParams(window.location.search);
const userData = sessionStorage.getItem('userData');

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Announcement
            userData={userData}/>
        </div>
    );
}

export default AnnouncementPage;