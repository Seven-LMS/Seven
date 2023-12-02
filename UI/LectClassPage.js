import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import LectClassContent from "./LectClassContent";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <LectClassContent/>
        </div>
    );
}

export default AnnouncementPage;