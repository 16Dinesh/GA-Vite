// React-Router-Routes Green-Assist
import Home from "./pages/default-pages/Home";
import Services from "./pages/default-pages/Services";
import Aboutus from "./pages/default-pages/Aboutus";
import Beanassist from "./pages/default-pages/Beanassist";
import Privacypolicy from "./pages/default-pages/Privacypolicy";
import Termsandconditions from "./pages/default-pages/Termsandconditions";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ContactUs from "./pages/default-pages/Contactus";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Plumbing from "./pages/listing-pages/Plumbing";
import Electrician from "./pages/listing-pages/Electrician";
import WaterPurifier from "./pages/listing-pages/WaterPurifier";
import SingleDriverAssistance from "./pages/listing-pages/SingleDriverAssistance";
import AdminLayout from "./components/admin-view/layout";
import AdminDashBoard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/payment";
import AdminOrders from "./pages/admin-view/orders";
import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import ServiceLayout from "./components/layouts/ServiceLayout";
import UnauthPage from "./pages/unauth-page";
import NotFound from "./pages/Notfound";
import CheckAuth from "./components/common/check-auth";
import AdminPageServices from "./pages/admin-view/Services";
import AdminPageTeam from "./pages/admin-view/Team";
import AdminPageRequest from "./pages/admin-view/requests";
import UserLoginLayout from "./components/userLogins/userLayout";
import UserLoginPage from "./pages/userLogins/login";
import UserRegisterPage from "./pages/userLogins/Register";
import UserResetPagePage from "./pages/userLogins/ResetIDS";
import UserPhoneOTP from "./pages/userLogins/PhoneOTP";
import UserLoginParticles from "./components/userLogins/Particles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Tune } from "@mui/icons-material";
import AdminPayment from "./pages/admin-view/payment";

export default function GreenAssistRoutes() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(checkAuth());
    }, [dispatch]);
  
    // const isLoading = false;  
    // const isAuthenticated = true;
    // const user = "admin"
  
    console.log("Main -> isAuthenticated:", isAuthenticated);
    console.log("Main -> isUser:", user);

    return (
      <div>
      <Routes>
        {/* Default Routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="home"
            element={<Home isAuthenticated={isAuthenticated} />}
          />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="be-an-assist" element={<Beanassist />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="terms-and-conditions" element={<Termsandconditions />} />
        </Route>

        {/* Services Routes */}
        <Route
          path="/service"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <ServiceLayout />
            </CheckAuth>
          }
        >
          {/* what to create path dynamically that can come form Redux Store API ENDPOINT*/}
          <Route path="water-purifier-assist" element={<WaterPurifier />} />
          <Route path="electrician-assist" element={<Electrician />} />
          <Route path="plumbing-assist" element={<Plumbing />} />
          <Route
            path="single-Driver-assist"
            element={<SingleDriverAssistance />}
          />
          {/* account, Checkout, payment-mode, payment-success, and more Features to add */}
        </Route>

        <Route
          path="/login"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <UserLoginLayout />
            </CheckAuth>
          }
        >
          <Route path="user" element={<UserLoginPage />} />
          <Route path="register" element={<UserRegisterPage />} />
          <Route path="phone-otp" element={<UserPhoneOTP />} />
          <Route path="forgot-user" element={<UserResetPagePage />} />
        </Route>

        {/* admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="payment" element={<AdminPayment />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="team" element={<AdminPageTeam />} />
          <Route path="requests" element={<AdminPageRequest />} />
          <Route path="addService" element={<AdminPageServices />} />
        </Route>

        {/* Authorization Routes*/}
        <Route
          path="/admin"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>


        <Route path="/particles-game"  element={<UserLoginParticles />} />
        <Route path="/unauthorized-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />

        {/* //    */}
        {/* <Route index element={<Navigate to="/particles-game" />} />  */}
      </Routes>
    </div>
  );
}
