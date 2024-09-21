import Footer from "../componets/common/Footer"
import NavBar from "../componets/common/NavBar"
import SearchBar from "../componets/Search"
import "../styles/Home.css";

function Home() {

    return (
        <>
        <NavBar/>
        <div>
            <img  className="main-img" src="./home/Green Assist xml.svg" alt="Green Assist Logo"></img>
            <h1 class="title-1">Book Trusted Help For </h1>
            <h1 class="title-2">Home Assists</h1>
        </div>
        <SearchBar/>
        <div>
           
        </div>
        <Footer/>
        </>
    )
}

export default Home