import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

const Register = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        psw: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                
                <label><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={input.name} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} id="name" required />

                <label><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} id="email" required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={input.psw} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})} id="psw" required />
                
                <button type="submit" class="registerbtn">Register</button>

                <div className="signin">
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register