import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // <-- New state for error message

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("role", json.user.role);
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("email", json.user.email);
      navigate("/");
    } else {
      setError("Invalid email or password"); // <-- Set error message
    }
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-6">
          <div className="card rounded-4 shadow p-4">
            <div className="text-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "300px" }}
                alt="logo"
              />
              <h4 className="mt-3">Guidance Grove</h4>
            </div>

            {/* Show error if exists */}
            {error && (
              <div className="alert alert-danger text-center py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={credentials.email}
                  required
                />
              </div>

              <div className="form-outline mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={credentials.password}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>

              <div className="text-center mb-3">
                <button className="btn btn-primary px-4" type="submit">
                  Login
                </button>
              </div>

              <div className="d-flex justify-content-center">
                <p className="mb-0 me-2">Don't have an account?</p>
                <Link className="btn btn-outline-primary" to="/signuphome">
                  Create New
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
