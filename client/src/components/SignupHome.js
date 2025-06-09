import { Link } from "react-router-dom";
import "./SignupHome.css";

export default function SignupHome() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-10 col-lg-10">
          <div className="card shadow-lg rounded-4 p-4 text-center">
            <h2 className="mb-4 text-dark fw-bold">Welcome to Mentorship!</h2>
            <p className="mb-3 fs-5">Choose your role to get started</p>

            <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
              <Link className="btn btn-outline-primary btn-lg px-4" to="/signup">
                Mentor
              </Link>
              <Link className="btn btn-outline-primary btn-lg px-4" to="/signupmentee">
                Mentee
              </Link>
            </div>

            <hr className="my-4" />

            <p className="mb-3">Already have an account?</p>
            <Link className="btn btn-primary px-4" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
