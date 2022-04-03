import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
export const LoginForm=()=>{

    const [logData,setLogData] = useState({
        email:"",
        password:""
    })

    const navigate= useNavigate();

    const handleChange=(e)=>{
        setLogData({...logData,[e.target.className]:e.target.value})
    }

    const sendData=(e)=>{
        e.preventDefault();
       fetch("https://sephorabackend.herokuapp.com/login",{
           method:"POST",
           body:JSON.stringify(logData),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.status == "Done"){
                   alert(`Login Succesful`)
                    navigate("/")
               } else{
                alert("Wrong Credentials");
            }
           })
       })
    }



    return (
        <div id = "LoginForm" onSubmit={sendData}>
            <form>
                <label>Email</label><br />
                <input type="text" className="email"  onChange={handleChange}/><br /><br /><br />
                <label>Password</label><br />
                <input type="password"  className="password" onChange={handleChange}/><br /><br /><br />

                <input style={{width:"40%",height:"35px"}} type="submit" value="Submit"/>
            </form>
        </div>
    )
}