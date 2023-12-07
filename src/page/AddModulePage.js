import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddModule from "../components/AddModule";

function AddModulePage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddModule/>
        </div>
    );
}

export default AddModulePage;