import { Outlet } from "react-router-dom";

export default function UserLoginLayout() {
    return (
        <>
        <div style={{display:"flex" , justifyContent: "center", marginTop: "5rem"}}>
           Some Image
        </div>
        <div style={{display:"flex" , justifyContent: "center", marginTop: "5rem"}}>
            <Outlet/>
        </div>
        </>
    )
}