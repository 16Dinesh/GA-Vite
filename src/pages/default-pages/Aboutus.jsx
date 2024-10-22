import Teams from "../../components/About-us/Team";
import ReachUsC from "../../components/FooterBox/default-pages/Reach_Us_Common";
import "../../styles/Aboutus.css";

function Aboutus() {
  return (
    <>
      <main>
        <div className="content-section">
          <div className="space-on-side">
            {/* Company Info Section */}
            <section className="company-info">
              <div className="text-section">
                <h1 className="h1-left">Our Company</h1>
                <p className="company-description">
                  Green Assist, a startup based in Kurnool, Andhra Pradesh,
                  India, was born from a vision to deliver outstanding home and
                  property services to our valued customers. As your go-to
                  destination for premier home and property enhancement
                  solutions, Green Assist is dedicated to transforming your
                  living spaces into the standards of excellence.
                </p>
              </div>
              <img
                src="/common/about-us.svg"
                alt="About Us"
                className="image-right"
              />
            </section>

            {/* Purpose and Goals Section */}
            <section className="purpose-goals">
              <h1 className="h1-middle">Purpose and Goals</h1>
              <p className="company-description">
                At Green Assist, our purpose is to provide exceptional services
                that enhance the quality of life for our valued customers. We
                are dedicated to creating comfortable living environments where
                our clients can enjoy every moment. Our goal is to be the go-to
                solution for all home and property needs, offering reliable
                services that exceed expectations. We work hard to make every
                encounter with Green Assist enjoyable and rewarding, with a
                dedication to quality and client satisfaction.
              </p>
            </section>

            {/* How We Do It Section */}
            <section className="how-we-do-it">
              <h1 className="h1-middle">How we do it?</h1>
              <p className="company-description">
                Green Assist offers a wide range of services including plumbing,
                electrical services, water purifier services, and any other home
                upgradation needs. Furthermore, we offer driver assistance to
                meet all your transportation requirements. Regardless of the
                service you opt for, our Assists are dedicated to enhancing and
                upgrading your requirements with efficiency and expertise.
              </p>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do">
              <h1 className="h1-middle">What we do?</h1>
              <p className="company-description">
                Green Assist offers a wide range of services including plumbing,
                electrical services, water purifier services, and any other home
                upgradation needs. Furthermore, we offer driver assistance to
                meet all your transportation requirements. Regardless of the
                service you opt for, our Assists are dedicated to enhancing and
                upgrading your requirements with efficiency and expertise.
              </p>
            </section>

            <Teams />

            {/* Trusted Assist Section */}
            <section className="trusted-assist">
              <h1 className="h1-middle">Trusted Assist</h1>
              <p className="company-description">
                Welcome to our team of Trusted Assists! Our technicians are not
                just skilled, but also well-behaved professionals dedicated to
                delivering top-notch service. With years of experience under
                their belts, our skilled technicians are ready to tackle any
                challenge that comes their way. From routine maintenance to
                complex repairs, you can trust our team to get the job done
                right. Rest assured, with our Trusted Assists by your side, your
                home and property are in good hands.
              </p>
            </section>

            {/* Customer Feedback Section */}
            <section className="customer-feedback">
              <h1 className="h1-middle">Customer Feedback</h1>
              <p className="company-description">
                Customer feedback is incredibly important to us at Green Assist.
                We strive to continuously improve our services, and your
                feedback plays a vital role in helping us achieve that goal.
                Your input allows us to enhance our offerings and ensure that we
                meet and exceed your expectations. Our technicians are valued
                members of our team, and your valuable feedback helps them
                refine their skills and deliver even better service. Thank you
                for taking the time to share your thoughts with us.
              </p>
            </section>

            {/* Future Plans Section */}
            <section className="future-plans">
              <h1 className="h1-middle">Future Plans and Vision</h1>
              <p className="company-description">
                In line with our current home service offerings, our future
                vision at Green Assist extends towards establishing a more
                organized working environment, leveraging advanced improvement
                techniques. We aim to create a seamless operational structure
                that enhances efficiency and effectiveness across all our
                services. We strive to lead the industry in innovation and
                commitment, and we always put the needs of our clients first. We
                also want to be the best at all we do.
              </p>
            </section>

            {/* Queries Section */}
            <section className="queries-support">
              <h1 className="h1-middle">
                Queries and Support From Green Assist
              </h1>
              <p className="company-description">
                If you encounter any problems, have any issues, or are
                interested in collaboration opportunities, feel free to reach
                out to us. We're dedicated to providing you with the support you
                need.
              </p>
            </section>

            <div className="contact-email">
              <p>Email: Services@GreenAssist</p>
            </div>
          </div>
        </div>
        <ReachUsC />
      </main>
    </>
  );
}

export default Aboutus;
