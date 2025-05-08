import React, { useState } from "react";
import axios from "axios"; 
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/admin/login", {
        emailId: email,
        collegeId: collegeId,
        password: password
      });

      console.log("Login successful:", response.data);
      // navigate to next page if needed
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials");
    }
  };

  return (
   
      <div className = "min-h-screen flex items center justify-center p-10  bg-center"
      style={{ backgroundImage: "url('src/assets/doodles.jpg')" }}>
        <div className = "bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 ">

             <div className = "sm:w-1/2 px-16">
              <h2 className = "font-bold text-2xl">Nexus - Login</h2>
              <p class = "text-sm mt-4">If you already a memeber, easily log in</p>

              <form onSubmit={handleSubmit} className = "flex flex-col gap-5">

            <input
                type="email"
                name = "email"
                className="p-2 mt-4 rounded-xl"
                placeholder="Enter E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

              />
                <input
          type="text"
           className="p-2 mt-4 rounded-xl"
          placeholder="Enter College ID"
          value={collegeId}
          onChange={(e) => setCollegeId(e.target.value)}
          required
        />
        <input
          type="password"
           className="p-2 mt-4 rounded-xl"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" class = "bg-[#001A6E] rounded-xl text-white py-2">Login</button>
              </form>
              <button class ="mt-5 text-x border-b py-4 text-blue-600" >Forgot your Password?</button>
             </div>

             <div className = "sm:block hidden w-1/2">
              <img className=" rounded-2xl" src = "src\assets\login_side.jpg" alt =""></img>
             </div>
        </div>
      </div>
  
   
  );
};

export default Login;
