import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Your trusted local grocery store offering quality products at the best prices.</p>
                </div>
                
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#Cart">Categories</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>📱 Phone: +91 8080343958</li>
                        <li>📧 Email: shahzebking39@gmail.com</li>
                        <li>📍 Address: Gause nager amravati.</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href='https://www.facebook.com/shazeb.ahmad.902/' target='_blank'>Facebook</a>
                        <a href="https://www.instagram.com/real__shahzeb.__/"
                            target="_blank" 
                            rel="noopener noreferrer">Instagram
                        </a>
                        <a href="#twitter">Twitter</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2024 Kirana Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;