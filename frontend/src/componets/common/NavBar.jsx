import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {

    return(
        <>
            <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
        <div className="container-fluid">
            <Link
            to="/"
            className="navbar-brand"
            >
            Green Assist
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav">
                <Link
                to="/"
                className="nav-link"
                >
                Home
                </Link>
                <Link
                to="/services"
                className="nav-link"
                >
                Services
                </Link>
                <Link
                to="/aboutus"
                className="nav-link"
                >
                About Us
                </Link>
                <Link
                to="/beanassist"
                className="nav-link"
                >
                Be an Assist
                </Link>
            </div>
            </div>
            <Link
            to="/contactus"
            className="btn nav-btn"
            >
            CONTACT US
            </Link>
        </div>
        </nav>
        </>
    )
}