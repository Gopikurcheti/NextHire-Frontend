import {FaLinkedin, FaGithub, FaTwitter,FaEnvelope} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer-section mt-5">

            <div className="container">

                <div className="row">

                    <div className="col-md-6">

                        <h3 className="footer-logo">
                            NextHire
                        </h3>

                       <p>
                         Connect. Hire. Grow.
                        </p>

                         <small>
                             NextHire connects talented candidates with top recruiters across industries.
                         </small>

                    </div>

                    <div className="col-md-3">

                        <h5>Quick Links</h5>

                        <ul className="footer-links">

                            <li>Home</li>
                            <li>Jobs</li>
                            <li>Profile</li>

                        </ul>

                    </div>

                    <div className="col-md-3">

                        <h5>Connect</h5>

                        <div className="social-icons">

                            <FaLinkedin />
                            <FaGithub />
                            <FaTwitter />
                            <FaEnvelope />

                        </div>

                    </div>

                </div>

                <hr />

                <div className="text-center">

                    © 2026 NextHire |
                    All Rights Reserved

                </div>

            </div>

        </footer>

    );

}





export default Footer;