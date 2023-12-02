import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import AddAssignment from "./AddAssignment";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddAssignment/>
        </div>
    );
}

export default AnnouncementPage;