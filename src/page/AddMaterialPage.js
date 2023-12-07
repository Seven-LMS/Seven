import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddMaterial from "../components/AddMaterial";

function AddMaterialPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddMaterial/>
        </div>
    );
}

export default AddMaterialPage;