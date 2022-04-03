import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav=()=>{
    return <div id = "navv">
       
        <Link to= "/Login" style={{ color: "white"}}><div>Login</div></Link>
        <Link to="/Signup" style={{ color: "white"}}><div>Signup</div></Link>
    </div>
}