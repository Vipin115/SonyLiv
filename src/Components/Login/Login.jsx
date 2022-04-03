import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../LogInForm/LoginForm";
import { Nav } from "../LogSinNav/Nav";
import { Signup } from "../Signup.jsx/Signup";
import "./Login.css";
export const Login=()=>{
    return (
        <div id = "Logy">
            <br />
            <Nav/>
            <LoginForm/>
        </div>
    )
}