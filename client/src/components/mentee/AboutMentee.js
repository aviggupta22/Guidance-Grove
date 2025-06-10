import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMentee(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [bookings, setBooking] = useState([]);
  const [sessions, setSession] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role") === "mentor") {
      navigate("*");
    }
    getUser();
    getEnrolledSession();
    getBooking();
    // eslint-disable-next-line
  }, []);

  async function getUser() {
    const response = await fetch(`http://localhost:5001/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setProfile(data);
  }

  async function getEnrolledSession() {
  const response = await fetch(
    `http://localhost:5001/api/sessions/fetchmenteeSesion`,
    {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  const data = await response.json();

  // Remove duplicates based on a unique key (adjust if needed)
  const seen = new Set();
  const uniqueSessions = data.filter(session => {
    const key = `${session.title}-${session.date}-${session.time}`; // use session._id if available
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  setSession(uniqueSessions);
}

  async function getBooking() {
    const response = await fetch(
      `http://localhost:5001/api/calendar/fetchmenteeBooking`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setBooking(data);
  }

  return (
    <div className="container text-center">
      {/* Profile Section */}
      <div className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "800px" }}>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="text-primary mb-3">About {profile.name}</h2>
              <p><i className="fa fa-envelope me-2 text-primary"></i>{profile.email}</p>
              <p><i className="fa fa-chalkboard me-2 text-primary"></i>Class Specialization - {profile.classsp}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booked Classes Section */}
      <div className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <h2 className="mb-3">Booked Classes</h2>
          <div className="row justify-content-center">
            {bookings.length === 0 ? (
              <h4>No Booking Requests Yet</h4>
            ) : (
              bookings.map((booking, index) => (
                <div className="col-md-4 d-flex mb-4" key={index}>
                  <div className="card w-100">
                    <div className="card-body text-start">
                      <h5 className="card-title">{booking.title}</h5>
                      <p><b>Start Date:</b> {booking.start.substring(0, 10)}</p>
                      <p><b>End Date:</b> {booking.end.substring(0, 10)}</p>
                      <p><b>Booking With Mentor:</b> {booking.mentor}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Enrolled Sessions Section */}
      <div className="d-flex justify-content-center mt-4">
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <h2 className="mb-3">Enrolled Sessions</h2>
          <div className="row justify-content-center">
            {sessions.length === 0 ? (
              <h4>No Sessions Requests Yet</h4>
            ) : (
              sessions.map((session, index) => (
                <div className="col-md-4 d-flex mb-4" key={index}>
                  <div className="card w-100">
                    <div className="card-body text-start">
                      <h4>{session.title}</h4>
                      <p><b>Description:</b> {session.description}</p>
                      <p><b>Date:</b> {session.date}</p>
                      <p><b>Time:</b> {session.time}</p>
                      <p><b>Session By:</b> {session.creator}</p>
                      <p>
                        <b>Joining Link:</b>{" "}
                        <a href={session.link} target="_blank" rel="noreferrer">
                          {session.link}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
