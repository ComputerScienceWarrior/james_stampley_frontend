import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [messageSubject, setMessageSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const submitResponse = () => {
        // since this works, I should now focus on sending this over to the backend and utilize a mailer
        console.log(`Message Subject: ${messageSubject}. \b Message Body: ${messageBody}.`)
    };

    return(
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Need to reach me?</h1>
                <div className="contact-divider"></div>
                <section className="contact-form">

                <input
                    id="subject"
                    className="contact-input"
                    onChange={(e) => setMessageSubject(e.target.value)}
                    placeholder="Reason for contact"
                />

                <textarea
                    id="reasonForContact"
                    className="contact-textarea"
                    onChange={(e) => setMessageBody(e.target.value)}
                    placeholder="Begin typing here..."
                />

                <button
                    className="contact-button"
                    onClick={submitResponse}
                >
                    Submit Message
                </button>

                </section>

            </div>
        </div>
    );
};

export default Contact;
