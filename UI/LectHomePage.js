import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import LectHome from "./LectHome";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <LectHome/>
        </div>
    );
}

export default AnnouncementPage;