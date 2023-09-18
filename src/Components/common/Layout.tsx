import Header from "../Block/Header";
import Footer from "../Block/Footer";
import { Outlet } from "react-router-dom";

const Layout = () =>{
    return(
       <div>
        <Header/>
        <Outlet/>
        <Footer/>
       </div>
    )
}
export default Layout;