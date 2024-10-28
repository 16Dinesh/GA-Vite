import { Link, useNavigate } from "react-router-dom";
import "../../styles/userLogins/Login.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function UserLoginPage() {
  const navigate = useNavigate();

  function handleIMGHome() {
    navigate("/home");
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
    navigate("/login/forgot-user");
  }

  function handleFormOTP(e) {
    e.preventDefault();
    console.log("clicked")
    navigate("/login/phone-otp");
  }

  return (
    <>
      <div>
        <img
          className="user-login-main-img"
          src="/home/Green Assist xml.svg"
          alt="Green Assist Logo"
          onClick={handleIMGHome}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 3rem 0 3rem",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            placeholder="Enter your Email"
            size="small"
            sx={{ my: 2, width: 370, mx: 5 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            placeholder="Enter your Password"
            size="small"
            type="password"
            sx={{ mb: 2, width: 370, mx: 5 }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
              fontSize: "13px",
              marginLeft: "3.5rem",
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link
              to="/login/forgot-user"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "3.5rem",
              }}
              onClick={handleClick}
            >
              Forgot Password?
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="btn nav-btn mx-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "250px",
              }}
            >
              Login
            </button>
          </div>
          <div className="user-login-separator">---- or ----</div>
          <div className="user-login-controllers">
            <div className="user-login-boxes">
              <form className="user-Login-form-controllers" onClick={handleFormOTP}>
                <PhoneIcon
                  sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
                />
                <span className="user-login-form-text">Login With OTP</span>
              </form>
            </div>
            <div className="user-login-boxes">
              <form className="user-Login-form-controllers" >
                <GoogleIcon
                  sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
                />
                <span className="user-login-form-text">Login With Google</span>
              </form>
            </div>
            <div className="user-login-boxes">
              <form className="user-Login-form-controllers">
                <FacebookIcon
                  sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
                />
                <span className="user-login-form-text">Login With FaceBook</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
