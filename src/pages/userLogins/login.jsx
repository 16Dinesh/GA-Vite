import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/userLogins/Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const initialState = {
  email: "",
  password: "",
};

export default function UserLoginPage() {
  const [data, setData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleIMGHome() {
    navigate("/home");
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/login/forgot-user");
  }

  function handleFormOTP(e) {
    e.preventDefault();
    navigate("/login/phone-otp");

  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", data);
    // Add authentication logic here, e.g., API call to log in
  };

  const handleGoogle = async (e) => {
    console.log("clicked")
  };

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
            name="email"
            value={data.email}
            onChange={handleChange}
            sx={{ my: 2, width: 370, mx: 5 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            placeholder="Enter your Password"
            size="small"
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={handleChange}
            sx={{ mb: 2, width: 370, mx: 5 }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
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
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="user-login-separator">---- or ----</div>
          <div className="user-login-controllers">
            <div className="user-login-boxes" onClick={handleFormOTP}>
              <PhoneIcon
                sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
              />
              <span className="user-login-form-text">Login With OTP</span>
            </div>
            <div className="user-login-boxes" onClick={handleGoogle}>
              <GoogleIcon
                sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
              />
              <span className="user-login-form-text">Login With Google</span>
            </div>
            <div className="user-login-boxes">
              <FacebookIcon
                sx={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
              />
              <span className="user-login-form-text">Login With Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
