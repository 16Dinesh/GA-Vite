import { TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "../../components/userLogins/fireBaseConfig";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default function UserPhoneOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();
  // console.log(auth.settings);
  auth.settings.appVerificationDisabledForTesting = true;

  // Function to initialize reCAPTCHA
  function onCaptchVerify() {
    if (window.location.hostname === "localhost") {
      auth.settings.appVerificationDisabledForTesting = true;
    }

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please try again.");
          },
        },
        auth
      );
    }
  }

  // Function to send OTP
  function onSignup() {
    if (!phoneNumber || !/^\+91\d{10}$/.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number after +91.");
      return;
    }

    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setOtpSent(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Error sending OTP. Please try again.");
      });
  }

  // Function to verify OTP
  function onOTPVerify() {
    if (!verificationCode || verificationCode.length !== 6) {
      toast.error("Please enter a 6-digit OTP.");
      return;
    }

    setLoading(true);
    window.confirmationResult
      .confirm(verificationCode)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("OTP verified successfully!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Invalid OTP. Please try again.");
      });
  }

  const handleFocus = () => {
    if (!phoneNumber.startsWith("+91")) {
      setPhoneNumber("+91");
    }
  };

  const handleBlur = () => {
    if (phoneNumber === "+91") {
      setPhoneNumber("");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (input.startsWith("+91") && input.length <= 13) {
      setPhoneNumber(input);
    }
  };
  return (
    <div>
      <h4 className="user-register-Heading">
        Welcome to the{" "}
        <span className="user-register-highlight">Green Assist!</span>
      </h4>
      <p className="user-register-subtext">
        Login Your Account By Phone Number
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Number"
          placeholder="Enter your number after +91"
          variant="outlined"
          size="small"
          margin="normal"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={otpSent}  
          sx={{ mb: 2, width: 370, mx: 5 }}
        />
        {!otpSent && (
          <button
            className="btn nav-btn mx-2"
            onClick={onSignup}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Submit"}
          </button>
        )}
        <div id="recaptcha-container"></div>
        {otpSent && (
          <>
            <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              separator={<span>-</span>}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
              renderInput={(props) => <input {...props} />}
            />
            <button
              className="btn nav-btn mx-2"
              onClick={onOTPVerify}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "250px",
                margin:"20px"
              }}
              disabled={loading}
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
      <div className="user-login-separator">---- Note ----</div>
      <div className="user-phoneOTP-Notes">
        <ul>
          <li>
            Green Assist Will Not Call You Personally Until a Service is Booked
          </li>
          <li>You will not get spam messages from us</li>
          <li>We'll not share our data with anyone</li>
        </ul>
      </div>
    </div>
  );
}
