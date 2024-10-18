import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonForms from "../../components/common/CommonForms";
import { loginFormControls } from "../../config";
import "./AuthRegister.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth-slice";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

export default function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended service path or default to "/service"
  

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message || "Successfully Done", {
          duration: 2000,
        });
        navigate("/services");   
      } else {
        toast.error(data?.payload?.message || "Error Occurred Please Try Again", {
          duration: 2000,
        });
      }
    });
  }

  console.log(formData);

  return (
    <div className="auth-register-container">
      <div className="auth-register-header">
        <h1>Sign in to your account</h1>
        <p>
          Don't have an account?
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
