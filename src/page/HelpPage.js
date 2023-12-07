import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HelpContent from "../components/HelpContent";

function HelpPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <HelpContent/>
        </div>
    );
}

export default HelpPage;