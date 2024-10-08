import "./Reach_Us_Common.css";
import { useNavigate } from "react-router-dom"; 

export default function ReachUsC() {

    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate("/contactus"); 
    };
    
    return (
        <>
         <div className="black-box">
            <div className="cta-box">
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
