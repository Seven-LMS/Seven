import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CoursePick from "../components/CoursePick";

function CoursePickPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <CoursePick/>
        </div>
    );
}

export default CoursePickPage;