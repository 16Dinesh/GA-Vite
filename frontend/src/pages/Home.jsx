import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import SearchBar from "../components/Search";
import ServersHome from "../components/Services";
import Testimonials from "../components/Testimonials";
import ReachUsH from '../components/FotterBox/Reach_Us_Home'
import "../styles/Home.css";

function Home() {
    return (
        <>
            <NavBar />
            <main>
                <section className="hero-section">
                    <img
                        className="main-img"
                        src="./home/Green Assist xml.svg"
                        alt="Green Assist Logo"
                    />
                    <h1 className="title-1">Book Trusted Help For</h1>
                    <h1 className="title-2">Home Assists</h1>
                </section>

                <section className="search-section">
                    <SearchBar />
                </section>

                <section className="content-section">
                    <header className="h3-middle">
                        <h3 className="green-h3">Our Difference</h3>
                        <h3 className="black-h3">
                            Why Choose Green Assist For Your Maintenance Journey?
                        </h3>
                    </header>

                    <div className="box-container">
                        <article className="box">
                            <h5>Skilled Technicians</h5>
                            <div className="line"></div>
                            <p>
                                Our platform connects you with verified plumbing, electrical, and
                                home service professionals who deliver top-quality work.
                            </p>
                        </article>
                        <article className="box">
                            <h5>Convenience Redefined</h5>
                            <div className="line"></div>
                            <p>
                                Book services online, track progress, and make easy payments all in
                                one place, ensuring a seamless experience.
                            </p>
                        </article>
                        <article className="box">
                            <h5>Reliable Solutions</h5>
                            <div className="line"></div>
                            <p>
                                Count on us to effectively address your household issues, offering
                                reliable solutions that stand the test of time.
                            </p>
                        </article>
                    </div>

                    <ServersHome />
                    <Testimonials />

                    <div className="con-tai">
                        <div className="how-it-works-box">
                            <h1>How It Works</h1>
                            <ul>
                                <li><span>1</span> Choose an Assist by Service, and Book.</li>
                                <li><span>2</span> Schedule an Assistant as early as today.</li>
                                <li><span>3</span> Chat, pay, tip, and review all in one place.</li>
                            </ul>
                        </div>
                        <img src="/home/How it works.png" alt="How it works illustration" className="under-image" />
                    </div>

                    <ReachUsH />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
