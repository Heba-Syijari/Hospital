import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer" id="Footer">

            <div className="final-container">

                <div className="final-box">
                    <h4>About us</h4>
                    <a href="#">clinics</a>
                    <a href="#">doctors</a>
                    <a href="#">services</a>
                    <a href="#">privacy policy</a>
                </div>

                <div className="final-box">
                    <h4>Contact us</h4>
                    <p> <i className="fas fa-envelope"></i> eyadtycenter@gmail.com </p>
                    <p> <i className="fas fa-phone"></i> +963 938 105 054 </p>
                </div>

                <div className="final-box">
                    <h4>Social media</h4>
                    <a href="#"><i className="fa-brands fa-facebook"></i> eyadty/facebook.com</a>
                    <a href="#"><i className="fa-brands fa-twitter"></i> eyadty_twitter.com</a>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i> +963 938 105 054</a>
                    <a href="#"><i className="fa-brands fa-telegram"></i> @eyadty</a>
                </div>

            </div>

            <h5 className="foot">Copyright@2022<a href="#"> EYADTY</a></h5>

</div>

    );
}

export default Footer;