import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/userLogins/Login.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginUser, googleUser, loginUser } from "../../store/auth-slice";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/userLogins/fireBaseConfig";

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function UserLoginPage({ isAuthenticated }) {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("In the Login Page isAuthenticated:", isAuthenticated);

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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("clicked login");
    const { email, password } = formData;

    // Basic validation for email and password
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Connected to Firebase");

      dispatch(loginUser(formData)).then((data) => {
        if (data?.payload?.success) {
          toast.success(data?.payload?.message, {
            duration: 2000,
          });
          setFormData(initialData);
          const redirectPath = location.state?.from || "/services";
          navigate(redirectPath);
        } else {
          toast.error(data?.payload?.message || "Login failed", {
            duration: 2000,
          });
        }
      });
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please check your email.");
      } else if (e.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (e.code === "auth/user-not-found") {
        toast.error("No user found with this email. Please register.");
      } else {
        toast.error("Error in sign-in. Please try again.");
      }
      console.error("Error during sign-in:", e);
    }
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
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />{" "}
              Remember Me
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
                sx={{ fontSize: "2rem", margin: "5px", marginLeft: "50px" }}
              />
              <span
                className="user-login-form-text"
                style={{ marginLeft: "0.5rem" }}
              >
                Sign In With OTP
              </span>
            </div>
            <div className="user-login-boxes">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  const { credential } = credentialResponse;
                  console.log("Google Token:", credential);

                  try {
                    const data = await dispatch(
                      googleUser({ token: credential })
                    );
                    if (data?.payload?.success) {
                      toast.success(
                        data?.payload?.message ||
                          "Successfully logged in with Google",
                        { duration: 2000 }
                      );
                      const redirectPath = location.state?.from || "/";
                      navigate(redirectPath);
                    } else {
                      toast.error(
                        data?.payload?.message ||
                          "Login failed. Please try again.",
                        { duration: 2000 }
                      );
                      navigate("/login/user");
                    }
                  } catch (error) {
                    console.error("Dispatch error:", error);
                    toast.error(
                      "An error occurred while processing your request."
                    );
                  }
                }}
                onError={(errorResponse) => {
                  console.error("Login Error:", errorResponse);
                  toast.error(
                    errorResponse.error_description ||
                      "An error occurred during login."
                  );
                }}
                type="standard"
                size="large"
                shape="rectangular"
                width="300px"
                useOneTap={!isAuthenticated}
                disabled={isAuthenticated}
              />
            </div>
            <div className="user-login-boxes">
              <FacebookIcon
                sx={{ fontSize: "2rem", margin: "5px", marginLeft: "50px" }}
              />
              <span className="user-login-form-text">Login With Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
