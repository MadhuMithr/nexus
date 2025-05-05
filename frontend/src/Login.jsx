import React,{useState} from "react";
import "./Login.css";

const Login= ()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return(
        <div className="login-container">
            <h1>NEXUS</h1>
            <h2>LOGIN</h2>
            <form >
                <input type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
                <button type="submit">Login</button>
            </form>

        </div>
    );
}
export default Login;
