import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForms from "../../components/common/CommonForms";
import { loginFormControls } from "../../config";
import "./AuthRegister.css"; 

const initialState = {
  email: "",
  password: "",
};

export default function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    // Perform form submission logic here
  }

  console.log(formData);

  return (
    <div className="auth-register-container">
      <div className="auth-register-header">
        <h1> Sign in to your account</h1>
        <p>
        Don't have an account
          <Link className="auth-register-link" to="/auth/register">
          Register
          </Link>
        </p>
      </div>
      <CommonForms
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
