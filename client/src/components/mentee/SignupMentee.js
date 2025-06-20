import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const SignupMentee = (props) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    classsp: "",
    role: "mentee",
    img: "",
    subject: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onPhoto = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) {
      props.showAlert("Please select an image", "warning");
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "jqywmvza");
    data.append("cloud_name", "rapidhack");

    try {
      const resp = await fetch(
        "https://api.cloudinary.com/v1_1/rapidhack/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const respoJSON = await resp.json();
      if (respoJSON.url) {
        setcredentials({ ...credentials, img: respoJSON.url });
        props.showAlert("Image uploaded successfully!", "success");
      } else {
        props.showAlert("Image upload failed", "danger");
      }
    } catch {
      props.showAlert("Error uploading image", "danger");
    }
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
      navigate("/");
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

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Name */}
              <div className="form-outline mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={credentials.name}
                  onChange={onChange}
                  minLength={3}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-outline mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-outline mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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

              {/* Class (Year) */}
              <div className="form-outline mb-3">
                <label htmlFor="classsp" className="form-label">Which Year (Class)</label>
                <input
                  type="number"
                  className="form-control"
                  name="classsp"
                  id="classsp"
                  value={credentials.classsp}
                  onChange={onChange}
                  placeholder="e.g., 1 for First Year"
                  required
                />
              </div>

              {/* Subject/Field */}
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
                  <option value="ml-ai">Machine Learning & AI</option>
                </select>
              </div>

              {/* Image Upload */}
              

              {/* Preview */}
              {credentials.img && (
                <div className="text-center mb-3">
                  <img
                    src={credentials.img}
                    alt="Uploaded"
                    className="img-fluid rounded"
                    style={{ maxWidth: "250px" }}
                  />
                </div>
              )}

              {/* Submit */}
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-primary px-4">
                  Register
                </button>
              </div>

              {/* Redirect */}
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
