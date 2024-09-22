import Footer from "../components/common/Footer"
import NavBar from "../components/common/NavBar"
import JoinUs_fotter from "../components/FooterBox/Join_Us_C"
import ContactUsForm from "../components/Forms/ContactUsForm"
import "../styles/Contactus.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactUs() {
    return (
      <>
        <NavBar />
        <main>
          <div className="content-section">
            <div className="first-contactus">
              <div className="text-content">
                <h6>Get in Touch</h6>
                <p>Connect with <br /> Green Assist Today</p>
              </div>
              <img src="/common/contact-us.png" className="image-right" alt="contact-us-logo" />
            </div>
          </div>
  
          <ContactUsForm />
  
          <div className="middle-page">
            <p className="green-p">Swift household solutions at your service</p>
            <h1>Quick and Convenient Services</h1>
            <p className="midd-p">Improvement solutions for your everyday requirements</p>
            <p className="midd-number">
              <i className="fas fa-phone " style={{ color: "#5b864d" }}></i> XXXX-XXX-XXX
            </p>
          </div>
  
          <JoinUs_fotter />
        </main>
        <Footer />
      </>
    );
  }
  
  export default ContactUs;