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
    <div className="login-container">
      <h1>NEXUS</h1>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="College ID"
          value={collegeId}
          onChange={(e) => setCollegeId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
