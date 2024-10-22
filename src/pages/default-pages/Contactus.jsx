import { PhoneCall } from "lucide-react";
import JoinUs_fotter from "../../components/FooterBox/default-pages/Join_Us_C";
import ContactUsForm from "../../components/Forms/ContactUsForm";
// import MapBoxMap from "../../components/Maps/Maps";
import "../../styles/Contactus.css";
import React, { Suspense } from "react";

const SomeComponent = React.lazy(() =>import ('../../components/Maps/Maps'));

function ContactUs() {
  return (
    <>
      <main>
        <div className="content-section">
          <div className="first-contactus">
            <div className="text-content">
              <h6>Get in Touch</h6>
              <p>
                Connect with <br /> Green Assist Today
              </p>
            </div>
            <img
              src="/common/contact-us.png"
              className="image-right"
              alt="contact-us-logo"
            />
          </div>
        </div>

        <ContactUsForm />

        <div className="middle-page">
          <p className="green-p">Swift household solutions at your service</p>
          <h1>Quick and Convenient Services</h1>
          <p className="midd-p">
            Improvement solutions for your everyday requirements
          </p>
          <p className="midd-number">
          <PhoneCall style={{color: "#5b864d"}}/> {' '} 
            XXXX-XXX-XXX
          </p>
        </div>

        <div className="space-needed"></div>

        <div className="Details-GA">
          <div className="maps">
          <Suspense fallback={<div>Loading map...</div>}>
              <SomeComponent />
            </Suspense>
          </div>
          <div className="details">
            <p className="green-p">My office :</p>
            <p>Kurnool, Andhra Pradesh</p>
            <p className="green-p">Contact us at</p>
            <p>Services@greenassist</p>
            <p>+91 XXXX-XXX-XXX</p>
          </div>
        </div>

        <div className="space-needed"></div>

        <JoinUs_fotter />
      </main>
    </>
  );
}

export default ContactUs;
