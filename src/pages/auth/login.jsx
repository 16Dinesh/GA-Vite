import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonForms from "../../components/common/CommonForms";
import { loginFormControls } from "../../config";
import "./AuthRegister.css";
import { useDispatch } from "react-redux";
import { adminLoginUser } from "../../store/auth-slice";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

export default function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(adminLoginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message || "Successfully Logged In", {
          duration: 2000,
        });
        navigate("/admin/dashboard")
      } else {
        toast.error(
          data?.payload?.message || "Error Occurred Please Try Again",
          {
            duration: 2000,
          }
        );
      }
    });
  }

  console.log(formData);

  return (
    <div className="auth-register-container">
      <div className="auth-register-header">
        <h1>Admin Dashboard Login</h1>
        <p>
          Don't have an account?
          <Link className="auth-register-link" to="/admin/register">
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
