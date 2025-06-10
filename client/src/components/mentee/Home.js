import React, { useEffect, useState, useContext } from "react";
import SessionitemMentee from "./SessionItemMentee";
import sessionContext from "../../context/notes/noteContext";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

export default function Home(props) {
  let navigate = useNavigate();
  const [usercards, setusercards] = useState([]);
  const context = useContext(sessionContext);
  const { sessions, getSessionsMentee } = context;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role") === "mentor") {
      navigate("/about");
    }
    getSessionsMentee();
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  async function getAllUsers() {
    const response = await fetch(`http://localhost:5001/api/auth/getAllusers`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    const mentors = data.filter((user) => user.role === "mentor");
    setusercards(mentors);
  }

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container">
      <div className="col-12 mt-3 text-center">
        <h2>Top Free Sessions By mentors</h2>
        <div className="row my-3 py-3">
          <Carousel responsive={responsive}>
            {sessions.map((session) => (
              <SessionitemMentee
                key={session._id}
                session={session}
                showAlert={props.showAlert}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">Discover Top mentors</h1>
        <div className="col-12 mt-3">
          <div className="row justify-content-center">
            {usercards.map((usercard, index) => (
              <div
                className="col-xl-3 col-md-6 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex justify-content-center"
                key={index}
              >
                <div
                  className="card text-white mx-3 mx-auto"
                  style={{ width: "18rem", backgroundColor: "#231f38" }}
                >
                  <div className="card-body" style={{ backgroundColor: "#28223f" }}>
                    <h5 className="card-title">{usercard.name}</h5>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>{usercard.work}</b> at {usercard.company}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Class Specialization:</b> {usercard.classsp}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Subject Specialization:</b> {usercard.subject}
                    </p>
                    <p className="card-text" style={{ fontSize: "14px" }}>
                      <b>Years of experience:</b> {usercard.experience}
                    </p>
                    <Link
                      to={`/viewProfile/${usercard._id}`}
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for centering carousel list and making card title white */}
      <style>{`
        .react-multi-carousel-list {
          display: flex !important;
          justify-content: center !important;
        }
        .card-title {
          color: white !important;
        }
      `}</style>
    </div>
  );
}
