import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import "../Login/Login.css";
 
import axios from "axios";
import config from "../../environments/environment.dev";
const Register = ()=>{
    const navigate = useNavigate()
    const [user,setUser]=useState({name:"",email:"",mobile:"",password:""});
    const handelInput=(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
    }
    const PostData = async(e)=>{
      e.preventDefault();
      await axios.post( config.baseUrl +"staffRegister",user).then(response=>{
            console.log(response);
            navigate("/login");
        }).catch(errorResponse=>{
            console.log(errorResponse);
            switch(errorResponse.response.status){
                case 400:
                  alert(`All Fields are Required.`);
                  break;
                case 402:
                  alert("Email already taken.");
                  break;
                default:
                  alert("Something went wrong")
              }
        });
    }
return(
    <div className="register-container">
        <div className="login-box">
  <h2>Register</h2>
  <form method="POST" id="form-id">
    <div className="user-box">
      <input type="text" name="name" required onChange={handelInput}/>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="email" name="email" required onChange={handelInput}  />
      <label>Email</label>
    </div>
    <div className="user-box">
        <input type="number" name="mobile" required onChange={handelInput}/>
        <label>Phone Number</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" required onChange={handelInput}  />
      <label>Password</label>
    </div>
    <Link to='#' onClick={PostData}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Register
    </Link>
    <Link to="/login">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </Link>
  </form>
</div>

    </div>
);


}
export default Register;