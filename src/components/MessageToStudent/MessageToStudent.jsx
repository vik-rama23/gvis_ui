import React from "react";
import "./MessageToStudent.css";

const MessageToStudent = () => {
    return (
        <div className="message-container">
            <section className="message">
                <h2>Director's Message</h2>
                <p>Director's message content goes here...</p>
            </section>
            <section className="message">
                <h2>Principal's Message</h2>
                <p>Principal's message content goes here...</p>
            </section>
        </div>
    )
}

export default MessageToStudent;