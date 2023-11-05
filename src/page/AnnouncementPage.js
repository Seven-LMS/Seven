import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Announcement from "../components/Announcement";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Announcement/>
        </div>
    );
}

export default AnnouncementPage;