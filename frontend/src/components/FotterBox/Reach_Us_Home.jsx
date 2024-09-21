import { useNavigate } from "react-router-dom"; 
import "./ReachUs.css";

export default function ReachUsH() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleGetStarted = () => {
        navigate("/contactus"); // Navigate to the Contact Us page
    };

    return (
        <div className="black-box">
            <h2>Reach Us</h2>
            <p>
                Start simplifying your maintenance journey with<br /> Green Assist today.
            </p>
            <button className="get-started" onClick={handleGetStarted}>
                Get Started
            </button> 
        </div>
    );
}
