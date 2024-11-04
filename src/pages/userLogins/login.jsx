import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/userLogins/Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginUser, googleUser } from "../../store/auth-slice";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

export default function UserLoginPage() {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { googleAuth } = useSelector((state) => state.auth);
  const [oneTapEnabled, setOneTapEnabled] = useState(!googleAuth);

  console.log(googleAuth)

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  console.log("Login data:", formData);


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
            value={formData.email}
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
            value={formData.password}
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
            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  if (!oneTapEnabled || googleAuth) return;

                  const { credential } = credentialResponse;
                  console.log("Google Token:", credential);

                  dispatch(googleUser({ token: credential })).then((data) => {
                    if (data?.payload?.success) {
                      toast.success(
                        data?.payload?.message ||
                          "Successfully logged in with Google",
                        { duration: 2000 }
                      );
                      const redirectPath = location.state?.from || "/";
                      navigate(redirectPath);

                      // Disable Google One Tap after successful login
                      setOneTapEnabled(false);
                    }
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                type="standard"
                size="large"
                shape="rectangular"
                width="300px"
                useOneTap={!googleAuth} // Enables One Tap only if googleAuth is false
                disabled={googleAuth} // Disables button if googleAuth is true
              />
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
