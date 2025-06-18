import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Signup = (props) => {
  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    role: "mentor",
    work: "",
    company: "",
    experience: "",
    subject: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5001/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("email", json.user.email);
      localStorage.setItem("role", json.user.role);
      props.showAlert("Account Created Successfully", "success");
      navigate("/about");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-6">
          <div className="card rounded-4 shadow p-4">
            <h2 className="mb-4 text-center text-dark">Create an Account</h2>

            <form onSubmit={handleSubmit}>
              {/* Text Inputs */}
              {[
                { label: "Name", name: "name", type: "text", required: true },
                { label: "Email", name: "email", type: "email", required: true },
                { label: "Password", name: "password", type: "password", required: true, minLength: 5 },
                { label: "Work", name: "work", type: "text", required: false },
                { label: "Company", name: "company", type: "text", required: false },
                {
                  label: "Experience (years)",
                  name: "experience",
                  type: "number",
                  required: true,
                  min: 0,
                  step: 1,
                },
              ].map(({ label, name, type, required, minLength, min, step }) => (
                <div className="form-outline mb-3" key={name}>
                  <label htmlFor={name} className="form-label">{label}</label>
                  <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    value={credentials[name]}
                    onChange={onChange}
                    required={required}
                    minLength={minLength}
                    min={min}
                    step={step}
                  />
                </div>
              ))}

              {/* Select Your Field */}
              <div className="form-outline mb-3">
                <label htmlFor="subject" className="form-label">Select Your Field</label>
                <select
                  className="form-select"
                  name="subject"
                  id="subject"
                  value={credentials.subject}
                  onChange={onChange}
                  required
                >
                  <option value="">Select Field</option>
                  <option value="dsa">DSA</option>
                  <option value="web-development">Web Development</option>
                  <option value="ml-ai">Machine Learning & Artificial Intelligence</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-primary px-4">
                  Register
                </button>
              </div>

              {/* Login Link */}
              <div className="d-flex justify-content-center">
                <p className="mb-0 me-2">Already have an account?</p>
                <Link className="btn btn-outline-primary" to="/login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
