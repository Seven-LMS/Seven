import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import AddAnnouncement from "./AddAnnouncement";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddAnnouncement/>
        </div>
    );
}

export default AnnouncementPage;