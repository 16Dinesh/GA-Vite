import "../../styles/userLogins/register.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { User2 } from "lucide-react";
import { auth } from "../../components/userLogins/fireBaseConfig";
import { useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
  number: "",
};

export default function UserRegisterPage() {
  const [data, setData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFireBaseGoogleLogin = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const handleAnonymousLogin = (e) => {
    // console.log('clicked')
  };
  return (
    <div className="user-register-container">
      <h4 className="user-register-Heading">
        Welcome to the{" "}
        <span className="user-register-highlight">Green Assist!</span>
      </h4>
      <p className="user-register-subtext">
        Register now and connect with our expert team for
        <br /> all your home needs
      </p>
      <div>
        <p className="user-register-sign-up-text">Quick Sign Up with:</p>
        <div className="user-register-login-icons-boxes-layout">
          <div
            className="user-register-login-icons-boxes"
            onClick={handleFireBaseGoogleLogin}
          >
            <GoogleIcon
              style={{
                fontSize: "2.8rem",
                marginLeft: "13px",
                marginTop: "5px",
              }}
            />
          </div>
          <div className="user-register-login-icons-boxes">
            <FacebookIcon style={{ fontSize: "3.4rem", marginLeft: "9px" }} />
          </div>
        </div>
        <div className="user-login-separator">---- or ----</div>
        <div>
          <form className="user-register-form-controllers">
            <TextField
              label="Name"
              placeholder="Enter your name"
              variant="outlined"
              size="small"
              margin="normal"
              sx={{ mb: 2, width: 370, mx: 5 }}
              name="userName"
              value={data.userName}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              margin="normal"
              sx={{ mb: 2, width: 370, mx: 5 }}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              placeholder="Enter your phone number"
              size="small"
              margin="normal"
              sx={{ mb: 2, width: 370, mx: 5 }}
              name="number"
              value={data.number}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              size="small"
              sx={{ mb: 2, width: 370, mx: 5 }}
              margin="normal"
              name="password"
              value={data.password}
              onChange={handleChange}
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
          </form>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
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
          Register
        </button>
      </div>
      <div className="user-login-separator">---- or ----</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="user-login-boxes" onClick={handleAnonymousLogin}>
          <User2
            style={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
          />
          <span className="user-login-form-text">Register Anonymously </span>
        </div>
      </div>
    </div>
  );
}
