import "../../styles/default-pages/Home.css";
import SearchBar from "../../components/Home/Search";
import ServersHome from "../../components/Services/ServicesHome";
import Testimonials from "../../components/Home/Testimonials";
import ReachUsH from "../../components/FooterBox/default-pages/Reach_Us_Home";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { checkAuth, googleUser } from "../../store/auth-slice";

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Initialize Google One Tap Login if the user is not authenticated
  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      const { credential } = credentialResponse;

      const response = await dispatch(googleUser({ token: credential }));
      if (response?.payload?.success) {
        toast.success("Successfully Google Login", {
          duration: 2000,
        });
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath);
      } else {
        toast.error("Error Occurred. Please Try Again", {
          duration: 2000,
        });
      }
    },
    onError: () => {
      console.log("Google One Tap Login Failed");
    },
    // Only trigger if the user is not authenticated
    enabled: !isAuthenticated && !isLoading,
  });
  return (
    <>
      <main>
        <section className="Home-dp-hero-section">
          <img
            className="main-img"
            src="/home/Green Assist xml.svg"
            alt="Green Assist Logo"
          />
          <h1 className="Hometitle-1">Book Trusted Help For</h1>
          <h1 className="Hometitle-2">Home Assists</h1>
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
                Our platform connects you with verified plumbing, electrical,
                and home service professionals who deliver top-quality work.
              </p>
            </article>
            <article className="box">
              <h5>Convenience Redefined</h5>
              <div className="line"></div>
              <p>
                Book services online, track progress, and make easy payments all
                in one place, ensuring a seamless experience.
              </p>
            </article>
            <article className="box">
              <h5>Reliable Solutions</h5>
              <div className="line"></div>
              <p>
                Count on us to effectively address your household issues,
                offering reliable solutions that stand the test of time.
              </p>
            </article>
          </div>
          <h3 className="title">In Services</h3>
          <ServersHome />
          <Testimonials />

          <div className="con-tai">
            <div className="how-it-works-box">
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
              className="under-image"
            />
          </div>

          <ReachUsH />
        </section>
      </main>
    </>
  );
}

export default Home;
