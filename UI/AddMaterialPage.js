import React from "react";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import AddMaterial from "./AddMaterial";

function AnnouncementPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddMaterial/>
        </div>
    );
}

export default AnnouncementPage;