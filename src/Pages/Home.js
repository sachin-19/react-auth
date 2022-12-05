import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
  return (
    <div>
        <div className="container">
            <h1>Welcome</h1>
            <h2 style={{color: "red"}}>{userName.name}</h2>
                
            <button onClick={handleLogout} type="submit" className="registerbtn">Logout</button>
        </div>
    </div>
  )
};

export default Home;