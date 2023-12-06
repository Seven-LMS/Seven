import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CoursePick from "../components/CoursePick";

const searchParams = new URLSearchParams(window.location.search);
//const userData = searchParams.get('userData');
const userData = sessionStorage.getItem('userData');

function CoursePickPage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <CoursePick
            userData={userData}/>
        </div>
    );
}

export default CoursePickPage;