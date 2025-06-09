import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Signup = (props) => {
  let navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    // classsp removed
    role: "mentor",
    work: "",
    company: "",
    experience: "",
    img: "",
    subject: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onPhoto = (e) => {
    setImage(e.target.files[0]);
  };

  async function uploadImage() {
    if (!image) {
      props.showAlert("Please select an image before uploading", "warning");
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
        setcredentials((prev) => ({ ...prev, img: respoJSON.url }));
        props.showAlert("Image uploaded successfully!", "success");
      } else {
        props.showAlert("Image upload failed!", "danger");
      }
    } catch (error) {
      props.showAlert("Error uploading image", "danger");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/signup`, {
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

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Text Inputs except classsp */}
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

              {/* Image Upload */}
              <div className="form-outline mb-3">
                <label htmlFor="img" className="form-label">Upload Your Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="img"
                  accept="image/*"
                  onChange={onPhoto}
                />
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={uploadImage}
                >
                  Upload Image
                </button>
              </div>

              {/* Preview Uploaded Image */}
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
