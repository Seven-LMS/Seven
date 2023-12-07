import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddAnnouncement from "../components/AddAnnouncement";

function AddAnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddAnnouncement/>
        </div>
    );
}

export default AddAnnouncementPage;