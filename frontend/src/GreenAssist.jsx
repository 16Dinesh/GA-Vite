import Home from "./pages/Home";
import Services from './pages/Services'
import Aboutus from './pages/Aboutus'
import Beanassist from './pages/Beanassist'
import Contactus from './pages/Contactus'
import Privacypolicy from './pages/Privacypolicy'
import Termsandconditions from './pages/Termsandconditions'
import { Route, Routes } from "react-router-dom";

export default function GreenAssist() {

    return (
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/beanassist" element={<Beanassist />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
        </Routes>
      </div>
    )
}