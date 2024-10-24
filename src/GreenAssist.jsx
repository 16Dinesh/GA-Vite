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
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";
import ServiceLayout from "./components/layouts/ServiceLayout";
import UnauthPage from "./pages/unauth-page";
import NotFound from "./pages/Notfound";
import CheckAuth from "./components/common/check-auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import AdminPageServices from "./pages/admin-view/Services";
import AdminPageTeam from "./pages/admin-view/Team";
import AdminPageRequest from "./pages/admin-view/requests";
import UserLoginLayout from "./components/userLogins/userLayout";
import UserLoginPage from "./pages/userLogins/login";
import UserRegisterPage from "./pages/userLogins/Register";
import UserResetPagePage from "./pages/userLogins/ResetIDS";

   
export default function GreenAssistRoutes() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // const isAuthenticated = true
  // const user = {
  //   role: "user"
  // }
  // const isLoading = false

  return (
    <div>
      <Routes>
        {/* Default Routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="be-an-assist" element={<Beanassist />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="terms-and-conditions" element={<Termsandconditions />} />
        </Route>

        {/* Services Routes */}  
        <Route path="/services" element={<ServiceLayout />}>             {/* what to create path dynamically that can come form Redux Store API ENDPOINT*/}
          <Route path="water-purifier-assist" element={<WaterPurifier />} />
          <Route path="electrician-assist" element={<Electrician />} />
          <Route path="plumbing-assist" element={<Plumbing />} />
          <Route
            path="single-Driver-assist"
            element={<SingleDriverAssistance />}
          />
          {/* account, Checkout, payment-mode, payment-success, and more Features to add */}
        </Route>

        <Route path="/login" element={<UserLoginLayout />}>
          <Route path="user" element={<UserLoginPage />} />
          <Route path="register" element={<UserRegisterPage />} />
          <Route path="forgot-user" element={<UserResetPagePage />} />
        </Route>

        {/* admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="team" element={<AdminPageTeam />} />
          <Route path="requests" element={<AdminPageRequest />} />
          <Route path="addService" element={<AdminPageServices />} />
        </Route>

        {/* Authorization Routes*/}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/unauthorized-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

