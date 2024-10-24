import { Button } from "@mui/joy";
import "./Reach_Us_Common.css";
import { useNavigate } from "react-router-dom";

export default function ReachUsC() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact-us");
  };

  return (
    <>
      <div className="black-box">
        <div className="cta-box">
          <p>
            Start simplifying your maintenance journey with <br /> Green Assist
            today.
          </p>
          {/* <Button
            sx={{
                backgroundColor: "#FFFFFF",
                color: "black",
                '&:hover': {
                  backgroundColor: "#5B864D",
                  color: "#FFFFFF",
                },
              }}
            className="get-started-off"
            onClick={handleGetStarted}
          >
            Get Started
          </Button> */}
        </div>
      </div>
    </>
  );
}
