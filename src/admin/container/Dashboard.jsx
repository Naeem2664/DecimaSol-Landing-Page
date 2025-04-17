import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../styles/admindashboard.css'
import images from "../../assets/images/images";
import BlogPage from "../pages/BlogPage";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate=useNavigate()

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    alert("You have been Logged Out!")
    navigate("/login");

  };
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <h2>Welcome to the Dashboard</h2>;
      case "about":
        return <h2>User Management</h2>;
      case "skilla":
        return <h2>Order List</h2>;
      case "blogs":
        return <BlogPage/>;
      case "settings":
        return <h2>Settings</h2>;
      default:
        return <h2>Welcome!</h2>;
    }
  };

  return (
    <div className="d-flex admin">
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: "250px", height: "100vh" }}
      >
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-5">Admin Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto h-100 w-100">
          <li className="nav-item">
            <a
              href="#dashboard"
              className={`nav-link ${activeTab === "dashboard" ? "active" : "text-dark"}`}
              onClick={() => setActiveTab("dashboard")}
              style={{
                backgroundColor: activeTab === "dashboard" ? "red" : "transparent",
                color: activeTab === "dashboard" ? "#fff" : "#000",
              }}
            >
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeTab === "about" ? "active" : "text-dark"}`}
              onClick={() => setActiveTab("about")}
              style={{
                backgroundColor: activeTab === "about" ? "red" : "transparent",
                color: activeTab === "about" ? "#fff" : "#000",
              }}
              
            >
              <i class="fa-solid fa-address-card"></i> About Info
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeTab === "skills" ? "active" : "text-dark"}`}
              onClick={() => setActiveTab("skills")}
              style={{
                backgroundColor: activeTab === "skills" ? "red" : "transparent",
                color: activeTab === "skills" ? "#fff" : "#000",
              }}
            >
             <i className="fas fa-brain"></i> Skills
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className={`nav-link ${activeTab === "blogs" ? "active" : "text-dark"}`}
              onClick={() => setActiveTab("blogs")}
              style={{
                backgroundColor: activeTab === "blogs" ? "red" : "transparent",
                color: activeTab === "blogs" ? "#fff" : "#000",
              }}
            >
              <i class="fa-solid fa-blog"></i> Blogs
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className={`nav-link ${activeTab === "settings" ? "active" : "text-dark"}`}
              onClick={() => setActiveTab("settings")}
              style={{
                backgroundColor: activeTab === "settings" ? "red" : "transparent",
                color: activeTab === "settings" ? "#fff" : "#000",
              }}
            >
              <i className="fas fa-cog me-2"></i> Settings
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={images.Profile}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-end text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={logOut}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4" style={{ flex: 1 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
