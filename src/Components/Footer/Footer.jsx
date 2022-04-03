import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <div className="footer-text"><span>Explore Shows:</span>SET Shows | SAB Shows | Marathi Shows | Kids | Aath Shows | English TV Shows</div>
                <div className="footer-text"><span>Movies by Language:</span>Hindi | English Movies | Marathi</div>
                <div className="footer-text"><span>Movies by Genre:</span>Action Movies | Comedy | Drama | Romantic Movies | Horror Movies</div>
                <div className="footer-text"><span>Channels:</span>LIVE TV</div>
                <div className="footer-text"><span>Sports:</span>Football | Cricket | WWE | UFC</div>
                <div className="footer-text"><span>Explore More:</span>Shows | Movies | Sports | Channels | Premium</div>
                <ul className="footer-meta">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                    <li>Advertise With Us</li>
                    <li>Content Redressal mechanism</li>
                    <li>3.4.32</li>
                </ul>
                <div className="footer-text">
                    <span>Social</span>
                    <ul className="footer-social">
                        <li>
                            <a href="#"><i class="uil uil-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-instagram-alt"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="uil uil-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-text">© 2021 Sony Pictures Networks India Pvt. Ltd.</div>
            </div>
        </footer>
    )
}

export { Footer };