import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {
    const [loading, setLoading] = useState(false);

    const handleNavigation = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300); 
    };

    return (
        <>
            {/* Loader */}
            {loading ? (
                <div className="Nav-loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <nav className="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand" onClick={handleNavigation}>
                            Green Assist
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <div className="navbar-nav mx-auto">
                                <NavLink to="/home" className="nav-link" onClick={handleNavigation} activeClassName="active">
                                    Home
                                </NavLink>
                                <NavLink to="/services" className="nav-link" onClick={handleNavigation} activeClassName="active">
                                    Services
                                </NavLink>
                                <NavLink to="/aboutus" className="nav-link" onClick={handleNavigation} activeClassName="active">
                                    About Us
                                </NavLink>
                                <NavLink to="/beanassist" className="nav-link" onClick={handleNavigation} activeClassName="active">
                                    Be an Assist
                                </NavLink>
                            </div>
                            {/* Move the button inside the collapse div */}
                            <NavLink to="/contactus" className="btn nav-btn" onClick={handleNavigation} style={{ marginLeft: '0', marginRight: '0' }}>
                                CONTACT US
                            </NavLink>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}
