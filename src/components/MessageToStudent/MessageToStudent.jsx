import React, { useState } from "react";
import "./MessageToStudent.css";
import directorsImage from "../../assest/images/director.png";
import principalImage from "../../assest/images/principal.png";
import { directorMessage, principalMessage } from "../../common/LabelText";

const MessageToStudent = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleReadMore = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent("");
    };

    return (
        <div className="message-container">
            <section className="message">
                <div className="cardHeaderTitle">Director's Message</div>
                <img className="message-image" src={directorsImage} alt="Director" />
                <p className="textMessage">“Education is a means of achieving a world of peace, justice,
                    freedom, and equality for all. Thus, education is extremely
                    necessary for all. No good life is possible without education. It
                    endorses the intelligence of human beings, develops his skill, and
                    enables him to be industrious.”</p>
                <button className="read-more" onClick={() => handleReadMore(directorMessage)}>Read More</button>
            </section>
            <section className="message">
                <div className="cardHeaderTitle">Principal's Message</div>
                <img className="message-image" src={principalImage} alt="Principal" />
                <p className="textMessage">We live in a world that demands excellence, creativity and
                    competitions. Everyone hopes to outwit the other and as a great
                    philosopher Jean-Paul Sartre says, “The other is a hell or menace for
                    everyone.”</p>
                <button className="read-more" onClick={() => handleReadMore(principalMessage)}>Read More</button>
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <p className="textMessage">{modalContent}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MessageToStudent;