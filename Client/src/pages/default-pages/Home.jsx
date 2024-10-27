import "../../styles/Home.css";
import SearchBar from "../../components/Home/Search";
import ServersHome from "../../components/Services/ServicesHome";
import Testimonials from "../../components/Home/Testimonials";
import ReachUsH from "../../components/FooterBox/default-pages/Reach_Us_Home";

function Home() {
  return (
    <>
      <main>
        <section className="Home-dp-hero-section">
          <img
            className="Home-dp-main-img"
            src="./home/Green Assist xml.svg"
            alt="Green Assist Logo"
          />
          <h1 className="Home-dp-Hometitle-1">Book Trusted Help For</h1>
          <h1 className="Home-dp-Hometitle-2">Home Assists</h1>
        </section>

        <section className="Home-dp-search-section">
          <SearchBar />
        </section>

        <section className="Home-dp-content-section">
          <header className="Home-dp-h3-middle">
            <h3 className="Home-dp-green-h3">Our Difference</h3>
            <h3 className="Home-dp-black-h3">
              Why Choose Green Assist For Your Maintenance Journey?
            </h3>
          </header>

          <div className="Home-dp-box-container">
            <article className="Home-dp-box">
              <h5>Skilled Technicians</h5>
              <div className="Home-dp-line"></div>
              <p>
                Our platform connects you with verified plumbing, electrical,
                and home service professionals who deliver top-quality work.
              </p>
            </article>
            <article className="Home-dp-box">
              <h5>Convenience Redefined</h5>
              <div className="Home-dp-line"></div>
              <p>
                Book services online, track progress, and make easy payments all
                in one place, ensuring a seamless experience.
              </p>
            </article>
            <article className="Home-dp-box">
              <h5>Reliable Solutions</h5>
              <div className="Home-dp-line"></div>
              <p>
                Count on us to effectively address your household issues,
                offering reliable solutions that stand the test of time.
              </p>
            </article>
          </div>
          <h3 className="Home-dp-title">In Services</h3>
          <ServersHome />
          <Testimonials />

          <div className="Home-dp-con-tai">
            <div className="Home-dp-how-it-works-box">
              <h1 style={{ color: "Black" }}>How It Works</h1>
              <ul>
                <li>
                  <span>1</span> Choose an Assist by Service, and Book.
                </li>
                <li>
                  <span>2</span> Schedule an Assistant as early as today.
                </li>
                <li>
                  <span>3</span> Chat, pay, tip, and review all in one place.
                </li>
              </ul>
            </div>
            <img
              src="/home/How it works.png"
              alt="How it works illustration"
              className="Home-dp-under-image"
            />
          </div>

          <ReachUsH />
        </section>
      </main>
    </>
  );
}

export default Home;
