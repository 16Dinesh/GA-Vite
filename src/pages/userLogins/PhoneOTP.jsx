import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../components/userLogins/fireBaseConfig";
import toast, { Toaster } from "react-hot-toast";

export default function UserPhoneOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      // Set app verification to disabled for testing only if available
      if (auth.settings) {
        auth.settings.appVerificationDisabledForTesting = true;
      } else {
        console.warn("Firebase Auth settings not available.");
      }
    }

    // Cleanup reCAPTCHA on component unmount
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        delete window.recaptchaVerifier;
      }
    };
  }, []);

  function setUpRecaptcha() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha verified");
          },
        },
        auth
      );
    }
  }

  function handleOTPBTN() {
    if (!phoneNumber || !/^\+91\d{10}$/.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number after +91.");
      return;
    }

    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOtpSent(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        toast.error("Error sending OTP. Please try again.");
        console.log(error);
        if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
          delete window.recaptchaVerifier;
        }
      });
  }

  function verifyOTP() {
    if (!verificationCode) {
      toast.error("Please enter the OTP sent to your phone.");
      return;
    }

    window.confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        toast.success("User signed in successfully!");
        console.log("User:", result.user);
      })
      .catch((error) => {
        toast.error("Error verifying OTP. Please check and try again.");
        console.log(error);
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
          sx={{ mb: 2, width: 370, mx: 5 }}
        />
        <button
          className="btn nav-btn mx-2"
          onClick={handleOTPBTN}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          Submit
        </button>
        <div id="recaptcha-container"></div>
        {otpSent && (
          <>
            <TextField
              label="Enter OTP"
              placeholder="Enter your OTP"
              variant="outlined"
              size="small"
              margin="normal"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              sx={{ mb: 2, width: 370, mx: 5 }}
            />
            <button
              className="btn nav-btn mx-2"
              onClick={verifyOTP}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "250px",
              }}
            >
              Verify OTP
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
