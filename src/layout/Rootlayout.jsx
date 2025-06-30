import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

function    Contactlayout(){
    return(<div>
        <Navbar/>
        <Outlet></Outlet>
    </div>)
}
export default Contactlayout