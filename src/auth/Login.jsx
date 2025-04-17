import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import images from "../assets/images/images";

const Login = () => {
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate("/admin");
      alert('Welcome to Admin Dashboard')
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={images.Admin_Login} alt="" />
            </div>
            <div className="col-md-6">
              <div className="login-form">
                <form onSubmit={handleLogin}>
                  <h2
                    className="text-center"
                    style={{
                      color: "#ffff",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}
                  >
                    Login
                  </h2>
                  <input type="text" placeholder="Enter admin username" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password to access: admin"
                  />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
