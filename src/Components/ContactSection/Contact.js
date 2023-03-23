import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="section">
            
            <div className="contact">
                <h1 className="contact-title">Contact Me</h1>

                <form style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
                    <label className="contact-form-label">Email</label>
                    <input className="contact-form-input" type="email" placeholder="email@example.com" style={{ height: 44}}></input>

                    <label className="contact-form-label">Message</label>
                    <textarea className="contact-form-input" style={{ height: "40vh"}}></textarea>

                    <button className="contact-form-submit" type="submit">Send</button>
                </form>

            </div>

        </div>
    )
}

export default Contact;