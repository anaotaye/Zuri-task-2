import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
import './contact.css';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [check, setCheck] = useState(false);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        
        if(name === "firstName")
            setFirstName(value);

        if(name === "lastName")
            setLastName(value);

        if(name === "email")
            setEmail(value);

        if(name === "message")
            setMessage(value);

        if(name === "agreement")
            setCheck(true);
    }
    
    const handleSubmit = (e) => {
        alert("Form sucessfully submitted");
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setCheck(false);
    }

    return (
        <>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="first_name" type="text" name="firstName" placeholder="Enter your first name" value={firstName} onChange={(e) => handleInputChange(e)} required/>
                
                <label htmlFor="lastName">Last Name</label>
                <input id="last_name" type="text" name="lastName" placeholder="Enter your last name" value={lastName} onChange={(e) => handleInputChange(e)} required/>
            </div>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="yourname@email.com" value={email} onChange={(e) => handleInputChange(e)} required/>

            <div>
                <label htmlFor="message">Send me a message and I'll reply you as soon as possible...</label>
                <textarea id="message" name="message" value={message} onChange={(e) => handleInputChange(e)}></textarea>
            </div>

            <div>
                <input type="checkbox" name="agreement" value={check} onChange={(e) => handleInputChange(e)} />
                <label htmlFor="agreement">You agree to providing your data to Anette, who may contact you.</label>
            </div>

            <button id="btn__submit" onClick={(e) => handleSubmit(e)}>Submit Message</button>
        </form>

        <Footer />

        <Outlet />
        </>
    );
}

export default Contact;