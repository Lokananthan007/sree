import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function Contact() {
    const form = useRef();
    useGlobalScroll();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_x7e0vq6',    
                'template_hb1q1pb',  
                form.current,
                'lS-I7TADeeDhnknVa'    
            )
            .then((result) => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                alert("Something went wrong. Please try again.");
                console.log(error.text);
            });
    };

    return (
        <div id="Contact">
            <h2 data-animate="fade-in" data-delay="0.2s">Turn your ideas into reality with us!</h2>
            <p data-animate="fade-in" data-delay="0.2s">Discuss with us and we'll guide you the way forward.</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form" data-animate="fade-in" data-delay="0.2s">
                <div className="form-group">
                    <input type="text" name="user_name" placeholder="Enter your full name" required />
                    <input type="tel" name="user_phone" placeholder="Provide mobile number" required />
                </div>

                <div className="form-group">
                    <input type="email" name="user_email" placeholder="Provide your email address" required />
                    <select name="project_type" required>
                        <option  disabled selected>Select Project Type</option>
                        <option>App Development</option>
                        <option>Software Development</option>
                        <option>Web Development</option>
                        <option>Digital Marketing</option>
                    </select>
                </div>

                <textarea
                    name="message"
                    placeholder="Briefly explain your idea/project here..."
                    rows="4"
                    required
                ></textarea>

                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
