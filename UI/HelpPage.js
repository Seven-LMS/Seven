import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import HelpContent from "./HelpContent";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <HelpContent/>
        </div>
    );
}

export default AnnouncementPage;