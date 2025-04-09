import "./Footercontent.css";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";


function Footercontent () {
    return (
        <>
            <div id="Footercontent">
                <div className="row mt-5">
                    <div className="col">
                        <h4>Our Services</h4>
                        <ul>
                            <li><IoArrowRedoOutline /><a href="/service1">App Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/Service/Software development">Software Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/service3">Web Development</a></li>
                            <li><IoArrowRedoOutline /><a href="/service4">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li><IoArrowRedoOutline /><a href="/">Home</a></li>
                            <li><IoArrowRedoOutline /><a href="/About">About</a></li>
                            <li><IoArrowRedoOutline /><a href="/Portfolio">Portfolio</a></li>
                            <li><IoArrowRedoOutline /><a href="/Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>GET IN TOUCH</h4>
                        <ul>
                            <li>
                                <TfiEmail /><br/>
                                <a href="mailto:sreeinfinitytech@gmail.com">sreeinfinitytech@gmail.com</a>
                                </li>
                                <li>
                                <BiPhoneCall /><br/>
                                <a href="tel:+916380561611">6380561611</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col">
                        <h4>Social Media</h4>
                        <ul>
                            <li>
                                <FaInstagram />
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
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
                                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                                </li>
                                <li>
                                <IoLogoWhatsapp />
                                <a href="https://wa.me/6380561611" target="_blank" rel="noopener noreferrer">
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