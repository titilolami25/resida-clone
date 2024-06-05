import React from 'react';
import "./contactUsStyle.css";
import HeroSection from 'components/heroSection';

const ContactUsPage = () => {
    return (
        <div>
            <div className="contactUsPageText">
                <p>Contact Us</p>
            </div>
            <div className="header">
                <div className="headerLeft">
                    <img src="logo.png" alt="Logo" className="logo" />
                    <h1>Company Name</h1>
                </div>
                <div className="headerRight">
                    <a href="#" className="headerLink">Contact</a>
                    <a href="#" className="headerLink">Download App</a>
                </div>
            </div>
            <div className="container">
                <div className="leftColumn">
                    <div className="rectangle">
                        <h2>Title</h2>
                        <p>Subtitle</p>
                        <div className="socialMediaIcons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialMediaLink">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialMediaLink">Instagram</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="socialMediaLink">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="formGroup">
                        <input type="text" placeholder="First Name" className="input" />
                        <input type="text" placeholder="Last Name" className="input" />
                    </div>
                    <div className="formGroup">
                        <input type="email" placeholder="Email" className="inputFullWidth" />
                        <input type="tel" placeholder="Phone Number" className="inputFullWidth" />
                    </div>
                    <div className="subjectSelection">
                        <label>Select Subject:</label>
                        <div className="option">
                            <input type="radio" name="subject" defaultChecked className="radioInput" />
                            <span>Subject 1</span>
                        </div>
                        <div className="option">
                            <input type="radio" name="subject" className="radioInput" />
                            <span>Subject 2</span>
                        </div>
                        <div className="option">
                            <input type="radio" name="subject" className="radioInput" />
                            <span>Subject 3</span>
                        </div>
                        <div className="option">
                            <input type="radio" name="subject" className="radioInput" />
                            <span>Subject 4</span>
                        </div>
                        <div className="option">
                            <input type="radio" name="subject" className="radioInput" />
                            <span>Subject 5</span>
                        </div>
                    </div>
                    <div className="messageGroup">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message..." className="textarea"></textarea>
                    </div>
                    <div className="sendButton">
                        <button type="submit" className="button">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
