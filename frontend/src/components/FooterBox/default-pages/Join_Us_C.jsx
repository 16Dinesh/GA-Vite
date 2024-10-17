import "./Reach_Us_Common.css";
import { useNavigate } from "react-router-dom"; 

export default function JoinUs_fotter() {

    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate("/home"); 
    };
    
    return (
        <>
         <div className="black-box">
            <div className="cta-box">
                <h2>Join Us</h2>
                <p>
                    Start simplifying your maintenance journey with <br/> Green Assist today.
                </p>
                <button className="get-started-off" onClick={handleGetStarted}>
                    Get Started
                </button> 
            </div>
        </div>
        </>
    );
}
