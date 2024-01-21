import React from "react";

const Footer = () => {
    return(
        <>
        <footer>
        <div class="footer-content">
            <div class="footer-section contact-info">
                <h3>Contact Information</h3>
                <p>Phone: +91 9867097658</p>
                <p>Email: info@farmershub.com</p>
            </div>

            <div class="footer-section sponsors">
                <h3>Sponsors</h3>
                <div class="sponsor-images">
                    <img src="https://media.licdn.com/dms/image/D5610AQHPeo3Zt6XHcA/image-shrink_1280/0/1704373276240?e=2147483647&v=beta&t=EAKmaYhKRLRrUpU3EJIlNu_riWxfqSYMSvNDonmyQKA" alt="Sponsor 1"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWCAdjPs9waj2jLnibkyAJglG1k0NGoftAg&usqp=CAU" alt="Sponsor 2"></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wg8OCVYU6P0_SaQspIJlxJdijxxGVsU90A&usqp=CAU" alt="Sponsor 3"></img>
                </div>
            </div>

            <div class="footer-section quick-links">
                <h3>Quick Links</h3>
                <a href="/">About Us</a>
                <a href="/">Home</a>
                <a href="/">Info</a>
            </div>
        </div>

        <div class="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Contact Us</a>
            
        </div>
    </footer>

        </>
    );
};

export default Footer;