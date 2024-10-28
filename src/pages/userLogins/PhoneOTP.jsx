import { TextField } from "@mui/material";

export default function UserPhoneOTP() {
  function handleOTPBTN() {}
  return (
    <div>
      <h4 className="user-register-Heading">
        Welcome to the{" "}
        <span className="user-register-highlight"> Green Assist !</span>
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
          placeholder="Enter your number"
          variant="outlined"
          size="small"
          margin="normal"
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
      </div>
      <div className="user-login-separator">---- Note ----</div>
      <div className="user-phoneOTP-Notes">
        <ul>
          <li>
            Green Assist Will Not Call You Personally Until a Service is Booked
          </li>
          <li>You will not Get Spam Message from US</li>
          <li>We'll Not Share Our Data To Any One</li>
        </ul>
      </div>
    </div>
  );
}
