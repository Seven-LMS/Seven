import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Message from "../components/Message";

function MessagePage() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Message/>
        </div>
    );
}

export default MessagePage;