import { TextField } from "@mui/material";
import { auth } from "../../components/userLogins/fireBaseConfig";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

export default function UserResetPagePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      // setMessage("A password reset link has been sent to your email.");
      toast.success("A password reset link has been sent to your email.");
    } catch (error) {
      // setMessage("Failed to send password reset email. Please try again.");
      toast.error("Failed to send password reset email. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h4 className="user-register-Heading">Forgot Password?</h4>
      <p className="user-register-subtext">
        No worries, enter the email address associated with your account, and we
        will send you a link to reset your password.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Email"
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          margin="normal"
          sx={{ mb: 2, width: 370, mx: 5 }}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          onClick={handleResetPassword}
          className="btn nav-btn mx-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
          }}
        >
          Submit
        </button>
      </div>
      {message && (
        <p style={{ textAlign: "center", color: "green" }}>{message}</p>
      )}
    </div>
  );
}
