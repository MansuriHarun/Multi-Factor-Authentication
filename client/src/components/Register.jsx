import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function Register() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
    const handleUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  
  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8000/api/v1/register", {
        email: user.email,
        password: user.password,
      });
      if (res.status === 200) {
        alert("User Register Successfully");
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={postData}>
        <div>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={user.email}
            onChange={handleUser} 
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={user.password}
            onChange={handleUser}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/login" className="link">Already have an account? Login</Link>
    </div>
  )
}

export default Register;