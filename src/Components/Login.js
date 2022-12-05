import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
        email: "",
        psw: ""
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.psw === loggeduser.psw)
        {
            localStorage.setItem("loggedin", true);
            navigate("/");
        }
        else {
            alert("Wrong Email or Password");
        }
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <div className="container">
                <h1>Login</h1>
                <p>Please fill in this form to Login.</p>
                
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} id="email" required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={input.psw} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} id="psw" required />
                
                <button type="submit" className="registerbtn">Login</button>
                <div className="signin">
                    <p>Don't have an account? <Link to="/register">Register Here</Link>.</p>
                </div>
            </div>
            
            
        </form>
    </div>
  )
}

export default Login