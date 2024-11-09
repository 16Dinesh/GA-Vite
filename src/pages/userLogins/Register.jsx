import "../../styles/userLogins/register.css";
import {
  auth,
  googleProvider,
} from "../../components/userLogins/fireBaseConfig";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  anonymousFireBase,
  googleUserFireBase,
  registerUser,
} from "../../store/auth-slice";
import { signInAnonymously } from "firebase/auth";

const initialState = {
  userName: "",
  email: "",
  password: "",
  number: "",
};

export default function UserRegisterPage() {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFireBaseGoogleLogin = async (e) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
      const data = {
        name: res.user.displayName,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        number: res.user.phoneNumber,
        photo: res.user.photoURL,
      };
      console.log(data);
      dispatch(googleUserFireBase(data)).then((data) => {
        if (data?.payload?.success) {
          toast.success(data?.payload?.message || "Successfully Done", {
            duration: 2000,
          });
          navigate("/services");
        } else {
          toast.error(
            data?.payload?.message || "Error Occurred Please Try Again",
            {
              duration: 2000,
            }
          );
        }
      });
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleRegisterFirebase = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation check
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registered in Firebase");

      // Dispatch the register action
      dispatch(registerUser(formData))
        .then((data) => {
          if (data?.payload?.success) {
            toast.success(data?.payload?.message, {
              duration: 2000,
            });

            setFormData(initialData);

            navigate("/login/user");
          } else {
            toast.error(data?.payload?.message, {
              duration: 2000,
            });
          }
        })
        .catch((err) => {
          console.error("Error in registerUser action:", err);
          toast.error("An error occurred during registration.");
        });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        toast.error(
          "This email is already registered. Please use a different email."
        );
      } else {
        console.error("Error during sign-up:", e);
        toast.error("Failed to register with Firebase.");
      }
    }
  };

  // const handleFireBaseAnonymousLogin = async (e) => {
  //   console.log("clicked");
  //   try {
  //     const result = await signInAnonymously(auth);
  //     console.log("Anonymous login successful:", result);

  //     const resData = {
  //       userName: "Anonymous",
  //       email: "Anonymous",
  //       isAnonymous: result.user.isAnonymous,
  //     };
  //       console.log(resData)
  //     dispatch(anonymousFireBase(resData)).then((data) => {
  //       if (data.payload?.success) {
  //         toast.success(data.payload.message || "Successfully Done", {
  //           duration: 2000,
  //         });
  //         navigate("/services");
  //       } else {
  //         toast.error(
  //           data.payload?.message || "Error Occurred Please Try Again",
  //           {
  //             duration: 2000,
  //           }
  //         );
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error during anonymous login:", error);
  //   }
  // };

  const handleFireBaseAnonymousLogin = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      await signInAnonymously(auth);

      // const result = await signInAnonymously(auth);
      const resData = {
        userName: "Anonymous",
        email: "Anonymous@firebase.com",
        isAnonymous: true,
      };
      console.log(resData);
      dispatch(anonymousFireBase(resData)).then((data) => {
        if (data.payload?.success) {
          toast.success(data.payload.message || "Successfully Done", {
            duration: 2000,
          });
          navigate("/services");
        } else {
          toast.error(
            data.payload?.message || "Error Occurred Please Try Again",
            {
              duration: 2000,
            }
          );
        }
      });
    } catch (error) {
      console.error("Error during anonymous login:", error);
    }
  };

  // console.log(formData);

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
              value={formData.userName}
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
              value={formData.email}
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
              value={formData.number}
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
              value={formData.password}
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
          onClick={handleRegisterFirebase}
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
        <div
          className="user-login-boxes"
          onClick={handleFireBaseAnonymousLogin}
        >
          <User2
            style={{ fontSize: "2rem", margin: "5px", marginLeft: "70px" }}
          />
          <span className="user-login-form-text">Register Anonymously </span>
        </div>
      </div>
    </div>
  );
}
