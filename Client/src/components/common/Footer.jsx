import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {

    return (
        <>
            <footer className="footer bg-light pt-4">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <h6 className="footer-h">ABOUT US</h6>
                        <p className="footer-p">
                        Green Assist simplifies daily activities by offering hassle-free household maintenance
                        solutions including plumbing and electrical services.
                        </p>
                        <h6>
                        <Link to="/privacypolicy" className="footer-h2">Privacy Policy</Link>
                        </h6>
                        <h6>
                        <Link to="/termsandconditions" className="footer-h2">Terms and Conditions</Link>
                        </h6>
                    </div>
                    <div className="col-md-4">
                        <h6 className="footer-h">MENU</h6>
                        <ul className="list-unstyled">
                        <li>
                            <Link to="/home" className="footer-h3">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="footer-h3">Services</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="footer-h3">About Us</Link>
                        </li>
                        <li>
                            <Link to="/beanassist" className="footer-h3">Be an Assist</Link>
                        </li>
                        <li>
                            <Link to="/contactus" className="footer-h3">Contact Us</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="footer-p">
                        Address: Kurnool, Andhra Pradesh<br />
                        Phn.no: XXX-XXX-XXXX<br />
                        E-mail: services@greenassist
                        </p>
                        <p className="footer-h">Follow us:</p>
                        <div className="social-icons">
                        <a href="https://facebook.com" className="me-2">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://instagram.com" className="me-2">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://whatsapp.com">
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}