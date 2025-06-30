import { Outlet } from "react-router-dom"
import Contact from "../Pages/Contact"

function Contactlayout(){
    return(<div>
        <Contact/>
        <Outlet></Outlet>
    </div>)
}
export default Contactlayout