import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [messageSubject, setMessageSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const submitResponse = () => {
        // since this works, I should now focus on sending this over to the backend and utilize a mailer
        console.log(`Message Subject: ${messageSubject}. \b Message Body: ${messageBody}.`)
        // window.location.href = '/';
    };

    return(
        <div className="contactWrapper">
            <header className="contactFormHeader">Need to reach me?</header>
            <section className="contactFormWrapper">
                <input id="subject" onChange={(e) => setMessageSubject(e.target.value)} placeholder="Reason For Contact" />
                <p>
                    <textarea id="reasonForContact" onChange={(e) => setMessageBody(e.target.value)} placeholder="Begin typing here..." type="password" />
                </p>
                <button className="submitResponseButton" onClick={submitResponse}>Submit</button>
            </section>
        </div>
    );
};

export default Contact;
