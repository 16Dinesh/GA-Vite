import JoinUs_fotter from "../../components/FooterBox/default-pages/Join_Us_C";
import BeanAssistForm from "../../components/Forms/BeanAssistForm";
import "../../styles/Beanassist.css";
function Beanassist() {
  return (
    <>
      <main>
        <div className="content-section">
          <div className="first-beanassit">
            <div className="text-content">
              <h6>Get Connected With Us</h6>
              <p>
                Connect with <br /> Green Assist Today
              </p>
            </div>
            <img
              src="/common/Be-an-Assist.png"
              className="image-right"
              alt="contact-us-logo"
            />
          </div>
        </div>
        <BeanAssistForm />
        <div className="requirements">
          <p className="req-title">Basic Requirements to hire an Assist </p>
          <div className="req-list">
            <ul>
              <li>Applicants must be 21 years and above.</li>
              <li>Experienced individuals are welcome.</li>
              <li>For those without experience, we offer workshops.</li>
              <li>
                Candidates with a wide range of skills are encouraged to apply.
              </li>
              <li>Must be available for at least 6 hours per day.</li>
            </ul>
          </div>
        </div>
        <JoinUs_fotter />
      </main>
    </>
  );
}

export default Beanassist;
