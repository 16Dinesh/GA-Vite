// GreenAssist.jsx
import Home from "./pages/default-pages/Home";
import Services from "./pages//default-pages/Services";
import Aboutus from "./pages/default-pages/Aboutus";
import Beanassist from "./pages/default-pages/Beanassist";
import Privacypolicy from "./pages/default-pages/Privacypolicy";
import Termsandconditions from "./pages/default-pages/Termsandconditions";
import { Route, Router, Routes } from "react-router-dom";
import ContactUs from "./pages/default-pages/Contactus";
import DefaultLayout from "./components/layouts/DefaultLayout";

export default function GreenAssistRoutes() {
  return (
    <div className="App">
      <Routes>
        {/* Default Routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Beanassist" element={<Beanassist />} />
          <Route path="Privacypolicy" element={<Privacypolicy />} />
          <Route path="Termsandconditions" element={<Termsandconditions />} />
        </Route>

        {/* Services Routes */}
        {/* <Router path="/service" element={<ServiceLayout/>}>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Router> */}

      </Routes>
    </div>
  );
}
