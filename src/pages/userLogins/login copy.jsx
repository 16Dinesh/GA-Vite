import { useNavigate } from "react-router-dom";
import "../../styles/userLogins/Login.css"
import { TextField } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UserLoginPageCopy() {
  const navigate = useNavigate();

  function handleIMGHome() {
    navigate("/home");
  }
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="text-center mb-4">
        <h1 style={{ color: 'green', fontWeight: 'bold' }}>Green</h1>
        <h1 style={{ fontWeight: 'bold' }}>Assist</h1>
      </div>
      
      <div className="form-group mb-3">
        <input type="email" className="form-control" placeholder="Enter your email" />
      </div>
      <div className="form-group mb-3">
        <input type="password" className="form-control" placeholder="Enter your password" />
      </div>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
        </div>
        <a href="#" className="text-muted">Forgot Password?</a>
      </div>
      
      <button className="btn btn-success w-100 mb-3">Login</button>
      
      <hr className="my-3" />
      <div className="text-center mb-3">----or----</div>
      
      <button className="btn btn-outline-success w-100 mb-2">
        <i className="bi bi-telephone-fill me-2"></i> Login with OTP
      </button>
      <button className="btn btn-outline-danger w-100 mb-2">
        <i className="bi bi-google me-2"></i> Login with Google
      </button>
      <button className="btn btn-outline-primary w-100">
        <i className="bi bi-facebook me-2"></i> Login with Facebook
      </button>
    </div>
  );
}