import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    // Handle loading state when the route changes
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [location]);

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
                        <NavLink to="/" className="navbar-brand">
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
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/beanassist"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Be an Assist
                                </NavLink>
                            </div>
                            <NavLink
                                to="/contactus"
                                className="btn nav-btn mx-2"
                            >
                                CONTACT US
                            </NavLink>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}