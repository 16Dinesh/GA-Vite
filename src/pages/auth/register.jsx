import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonForms from "../../components/common/CommonForms";
import { AdminregisterFormControls } from "../../config";
import "./AuthRegister.css";
import { useDispatch } from "react-redux";
import { adminRegisterUser } from "../../store/auth-slice";
import toast from 'react-hot-toast';

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(adminRegisterUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message || "Successfully Done", {
          duration: 2000,
        });
        navigate("/admin/login");
      } else {
        toast.error(data?.payload?.message || "Error Occurred Please Try Again", {
          duration: 2000,
        });
      }
    });
  }

  // console.log(formData);

  return (
    <div className="auth-register-container">
      <div className="auth-register-header">
        <h1>Create new Admin account</h1>
        <p>
          Already have an account?
          <Link className="auth-register-link" to="/admin/login">
            Login
          </Link>
        </p>
      </div>
      <CommonForms
        formControls={AdminregisterFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <div>
      </div>
    </div>
  );
}
