// React-Router-Routes Green-Assist
import Home from "./pages/default-pages/Home";
import Services from "./pages//default-pages/Services";
import Aboutus from "./pages/default-pages/Aboutus";
import Beanassist from "./pages/default-pages/Beanassist";
import Privacypolicy from "./pages/default-pages/Privacypolicy";
import Termsandconditions from "./pages/default-pages/Termsandconditions";
import { Navigate, Route, Routes } from "react-router-dom";
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

export default function GreenAssistRoutes() {
  const {
    user,
    isAuthenticated,
    isLoading,
  } = useSelector((state) => state.auth);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // const isAuthenticated = true
  // const user = {
  //   name: "user",
  //   role: "user"
  // }
  // const isLoading = false

  return (
    <div className="App">
      <Routes>
        {/* Default Routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Beanassist" element={<Beanassist />} />
          <Route path="Privacypolicy" element={<Privacypolicy />} />
          <Route path="Termsandconditions" element={<Termsandconditions />} />
        </Route>

        {/* Services Routes */}
        <Route
          path="/services"
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
          <Route path="waterPurifier" element={<WaterPurifier />} />
          <Route path="electrician" element={<Electrician />} />
          <Route path="plumbing" element={<Plumbing />} />
          <Route
            path="singleDriverAssistance"
            element={<SingleDriverAssistance />}
          />
          {/* account, Checkout, payment-mode, payment-success, and more Features to add */}
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

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
