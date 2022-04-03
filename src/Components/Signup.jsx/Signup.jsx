import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../LogSinNav/Nav";
import "./Signup.css";
export const Signup=()=>{

    const [user,setUser] = useState({
        name:"vipin",
        username:"",
        password:"",
        email:"",
        phone:0,
        description:"op"
    })

        const navigate = useNavigate();
    const handleChange=(e)=>{
        setUser({...user,[e.target.className]:e.target.value})
    }

    const sendData=(e)=>{
        e.preventDefault();
       fetch("https://sephorabackend.herokuapp.com/register",{
           method:"POST",
           body:JSON.stringify(user),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.status == "Done"){
                   alert("Registered Succesfully")
                navigate("/login")
               }else if(res.status == "HalfDone"){
                alert(res.errors);
               } else{
                alert("Already Registered");
            }
           })
       })
    }

    return (
        <div className="Nav_log">
            <Nav/>
        <div id = "Signup">
            <form id = "signupForm" onSubmit={sendData}>
                <label>Username</label><br />
                <input type="text" className="username" id="name"  onChange={handleChange}/><br /><br />
                <label>Email</label><br />
                <input type="text" className="email" onChange={handleChange}/><br /><br />
                <label>Password</label><br />
                <input type="password" className="password" onChange={handleChange}/><br /><br />
                <label>Phone Number</label><br />
                <input type="text" className="phone" onChange={handleChange}/>
                <br />
                <br />
                <input style={{width:"40%", height:"35px"}} type="submit" value="Submit" />
            </form>
        </div>
        </div>
        
    )
}