import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

function Login() {
  const { setIsLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", formData);
  
      if (response.status === 200) {
        const { data } = response.data;
  
        // Update context and local storage
        setIsLogin(true);
        localStorage.setItem("user_id", data._id);
  
        // Redirect to the previous page or home
        const redirectTo = location.state?.redirectTo || "/";
        navigate(redirectTo, { replace: true }); // Use replace to force a reload
      } else {
        setError(response.data.message || "Invalid login credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login");
    }
  };
  

  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-5 bg-white p-4 rounded">
            <h2 className="text-center mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <div className="text-center mt-3">
                <a href="/Sign" className="text-primary">
                  Don’t have an account? Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
