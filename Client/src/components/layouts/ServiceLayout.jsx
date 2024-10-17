import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

export default function ServiceLayout() {

    return (
        <>
        <NavBar/>
        <Outlet/>   
        <Footer/>
        </>
    )
}