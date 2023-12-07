import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddAssignment from "../components/AddAssignment";

function AddAssignmentPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <AddAssignment/>
        </div>
    );
}

export default AddAssignmentPage;