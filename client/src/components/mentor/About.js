import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

export default function About(props) {
  let navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [bookings, setBooking] = useState([]);
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role") === "mentee") {
      navigate("*");
    }
    getUser();
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
    const response2 = await fetch(
      `http://localhost:5001/api/calendar/fetchmyEvents`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const events = await response2.json();
    setAllEvents(events);
  }

  async function getBooking() {
    const response = await fetch(
      `http://localhost:5001/api/calendar/fetchmentorBooking`,
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
    <div className="container d-flex flex-column align-items-center py-5">
      <div
        className="card w-100 mb-5"
        style={{
          maxWidth: "800px",
          padding: "30px 40px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontSize: "2rem" }}>
          <i className="fa fa-certificate fa-fw me-2 text-primary"></i>
          About {profile.name}
        </h2>
        <hr />
        <p className="d-flex align-items-center mb-3 fs-5">
          <i className="fa fa-briefcase fa-fw me-2 text-primary"></i>
          {profile.work} at {profile.company}
        </p>
        <p className="d-flex align-items-center mb-3 fs-5">
          <i className="fa fa-cogs fa-fw me-2 text-primary"></i>
          Years of experience - {profile.experience}
        </p>
        <p className="d-flex align-items-center mb-3 fs-5">
          <i className="fa fa-envelope fa-fw me-2 text-primary"></i>
          {profile.email}
        </p>
        <p className="d-flex align-items-center mb-3 fs-5">
          <i className="fa fa-book-open fa-fw me-2 text-primary"></i>
          Subject Specialization - {profile.subject}
        </p>
      </div>

      <div
        className="card w-100 mb-5"
        style={{ maxWidth: "1000px", padding: "20px", borderRadius: "12px" }}
      >
        <h3 className="text-center">Your Accepted Bookings</h3>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            marginTop: "30px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        />
      </div>

      <div className="row justify-content-center w-100" style={{ maxWidth: "1200px" }}>
        {bookings.map((booking, index) => (
          <div
            className="card mx-3 my-3"
            key={index}
            style={{
              width: "280px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{booking.title}</h5>
              <p className="card-text mb-1">
                <b>Start Date:</b> {booking.start.substring(0, 10)}
              </p>
              <p className="card-text mb-1">
                <b>End Date:</b> {booking.end.substring(0, 10)}
              </p>
              <p className="card-text mb-1">
                <b>Mentee:</b> {booking.createdBy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
