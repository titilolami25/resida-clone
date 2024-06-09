import React from 'react';
import './contactUsStyle.css';
import Header from 'shared/header';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUsPage = () => {
    return (
        <div className="contact-us-container">
            <Header />
            <div className="contactUsPageText">
                <h1>Contact Us</h1>
                <p className="subtitle">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="container">
                <div className="leftColumn">
                    <div className="formGroup">
                        <div className="inputGroup">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className="input" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" value="Idoko" className="input" />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className="inputGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="input" />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber" value="+1 012 3826 781" className="input" />
                        </div>
                    </div>
                    <div className="subjectSelection">
                        <label>Select Subject:</label>
                        <div className="options">
                            <div className="option">
                                <input type="radio" name="subject" defaultChecked className="radioInput" />
                                <span>General Inquiry</span>
                            </div>
                            <div className="option">
                                <input type="radio" name="subject" className="radioInput" />
                                <span>Payments and Fees</span>
                            </div>
                            <div className="option">
                                <input type="radio" name="subject" className="radioInput" />
                                <span>Technical</span>
                            </div>
                            <div className="option">
                                <input type="radio" name="subject" className="radioInput" />
                                <span>Registration</span>
                            </div>
                            <div className="option">
                                <input type="radio" name="subject" className="radioInput" />
                                <span>Other</span>
                            </div>
                        </div>
                    </div>
                    <div className="messageGroup">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message..." className="textarea"></textarea>
                    </div>
                    <div className="sendButton">
                        <button type="submit" className="button">Send Message →</button>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="rectangle">
                        <h2>Contact Information</h2>
                        <p>Say something to start a live chat!</p>
                        <div className="contactDetails">
                            <div className="contactDetail">
                                <FaPhone className="icon" />
                                <p>+1 012 3826 781</p>
                            </div>
                            <div className="contactDetail">
                                <FaEnvelope className="icon" />
                                <p>demo@gmail.com</p>
                            </div>
                            <div className="contactDetail">
                                <FaMapMarkerAlt className="icon" />
                                <p>132 Dartmouth Street Boston,<br /> Massachusetts 02156 United States USA</p>
                            </div>
                        </div>
                        <div className="socialMediaIcons">
                            <FaTwitter className='icon'/>
                            <FaInstagram className='icon'/>
                            <FaYoutube className='icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
