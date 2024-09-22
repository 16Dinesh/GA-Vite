import Footer from "../components/common/Footer"
import NavBar from "../components/common/NavBar"
import ServersHome from "../components/Services";
import ReachUsC from "../components/FooterBox/Reach_Us_Common";


function Services() {

    return (
        <>
        <NavBar/>
            <main >
                <ServersHome/>
                <div className="space-needed"></div>
                <ReachUsC/>
            </main>
        <Footer/>
        </>
    )
}

export default Services