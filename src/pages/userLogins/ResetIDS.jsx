import { TextField } from "@mui/material";

export default function UserResetPagePage() {
  return (
    <div>
      <h4 className="user-register-Heading">Forgot Password?</h4>
      <p className="user-register-subtext">
        No worries, Enter the email address associated with your account, we
        will send your a link to reset your password.
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
    </div>
  );
}
