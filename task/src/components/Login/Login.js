import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";
// import config from "../../environments/environment.dev";
import "./Login.css";

const Login = ()=>{
const navigate = useNavigate();
const [user,setUser]=useState({email:"",password:""});
const handelInput=(e)=>{
 setUser({...user,[e.target.name]:e.target.value});
}
const PostData = async(e)=>{
    e.preventDefault();
    await axios.post("/staffLogin",user).then(response=>{
        console.log(response);
        navigate("/success");
    }).catch(errorResponse=>{
        console.log(errorResponse);
        switch(errorResponse.response.status){
          case 400:
            alert(`${!user.email.length?? 'Email '}${!user.password.length?? 'Password '}Is required.`);
            break;
          case 401:
            alert("Invalid Email or Password.");
            break;
          default:
            alert("Something went wrong")
        }
    });
}
return(
    <div className="login-container">
        <div className="login-box">
  <h2>Login</h2>
  <form method="POST" onSubmit={PostData} id="form">
    <div className="user-box">
      <input type="text" name="email" required onChange={handelInput}  />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" required onChange={handelInput} />
      <label>Password</label>
    </div>
    <Link to='#'  onClick={PostData}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
      
    </Link>
    <Link to="/register">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Register
    </Link>
  </form>
</div>

    </div>
);


}
export default Login;