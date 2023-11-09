import React from "react";
import "../style/chatstyle.css";

function Message() {
    
    
    return (
        <div className="content">
            <div className="chat-container">
                <div className="chat-sidebar">
                    <h2>Inbox</h2>
                    <div className="search-bar">
                        <input type="text" id="user-search" placeholder="Search users" />
                    </div>
                    <ul className="user-list">
                        <li className="active">User 1</li>
                        {/* Users list here */}
                    </ul>
                </div>
                <div className="chat-content">
                    <div className="chat-header">
                        <h2>User's name</h2> {/* User's name displayed here */}
                    </div>
                    <div className="chat-messages">
                        {/* Messages will be displayed here */}
                        <div className="message received">
                            <div className="message-text">Hello, how are you?</div>
                        </div>
                        <div className="message sent">
                            <div className="message-text">I'm doing great, thanks!</div>
                        </div>
                    </div>
                    <div className="chat-input">
                        <input type="text" id="message-input" placeholder="Type your message..." />
                        <button id="send-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
