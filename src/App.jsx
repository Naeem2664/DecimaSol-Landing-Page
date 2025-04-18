import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./container/Page";
import Login from "./auth/Login";
import Dashboard from "./admin/container/Dashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Add_blog_Page from "./admin/pages/Add_blog_Page";

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" index element={<Page />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/blogs/add-new"
          element={
            <ProtectedRoutes>
              <Add_blog_Page />
            </ProtectedRoutes>
          }
        />
      </Routes>

    </Router>
    
  );
};

export default App;
