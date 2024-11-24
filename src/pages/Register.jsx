import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-5 bg-white p-4 rounded">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-grid">
              
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                
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

export { Register };
