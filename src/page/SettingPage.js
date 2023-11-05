import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Setting from "../components/Setting";

function SettingPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Setting/>
        </div>
    );
}

export default SettingPage;