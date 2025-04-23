import "./Footercontent.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footercontent() {
    return (
        <>
            <div id="Footercontent">
                <div className="row mt-5">
                    <div className="col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><IoArrowRedoOutline /><a href="/service/app development">App Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/service/software development">Software Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/service/web development">Web Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/service/digital marketing">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li><IoArrowRedoOutline /><a href="/">Home</a></li>
                            <li><IoArrowRedoOutline /><a href="/About">About</a></li>
                            <li><IoArrowRedoOutline /><a href="/work delivered">Work Delivered</a></li>
                            <li><IoArrowRedoOutline /><a href="/contact us">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>GET IN TOUCH</h4>
                        <ul>
                            <li>
                                <TfiEmail /> <a href="mailto:sreeinfinitytech@gmail.com">sreeinfinitytech@gmail.com</a><br />
                                <BiPhoneCall /> <a href="tel:+917200447570">+91 72004 47570</a><br />
                                <strong>Open:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Social Media</h4>
                        <ul>
                            <li>
                                <FaInstagram />
                                <a href="https://www.instagram.com/sreeinfinitytech" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <FaLinkedin />
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <FaSquareFacebook />
                                <a href="https://www.facebook.com/profile.php?id=61575187542248" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <IoLogoWhatsapp />
                                <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="Copyright">
                <p>Copyright @2025 Designed By <strong>SREE INFINITY TECH PRIVATE LIMITED</strong>. All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footercontent;
