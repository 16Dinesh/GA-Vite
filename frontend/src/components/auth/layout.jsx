import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (
        <>
        <div>
            <p>login Layout</p>
            <Outlet/>   
        </div>
        </>
    )
}