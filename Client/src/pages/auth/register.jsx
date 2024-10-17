import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForms from "../../components/common/CommonForms";
import { registerFormControls } from "../../config";
import "./AuthRegister.css"; 

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    // Perform form submission logic here
  }

  console.log(formData);

  return (
    <div className="auth-register-container">
      <div className="auth-register-header">
        <h1>Create new account</h1>
        <p>
          Already have an account?
          <Link className="auth-register-link" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <CommonForms
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
