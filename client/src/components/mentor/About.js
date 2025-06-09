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
    if (localStorage.getItem("role")==="mentee") {
      navigate("*");
    }
    getUser();
    getBooking();
    // eslint-disable-next-line
  }, []);

  // Separate function to get user details

  async function getUser() {
    const response = await fetch(`http://localhost:5000/api/auth/getUser`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setProfile(data);
    const response2 = await fetch(
      `http://localhost:5000/api/calendar/fetchmyEvents`,
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
      `http://localhost:5000/api/calendar/fetchmentorBooking`,
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
    <div className="container">
      <div className="container rounded bg-white">
        <div
          className="w3-content w3-margin-top"
          style={{ maxWidth: "1400px" }}
        >
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img
                    src={profile.img}
                    style={{ width: "100%" }}
                    alt="Avatar"
                  />
                </div>
              </div>
              <br />
            </div>
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <div className="w3-container">
                  <br />
                  <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>
                    About {profile.name}
                  </h2>
                  <hr />
                  <p>
                    <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    {profile.work} at {profile.company}
                  </p>
                  <p>
                    <i className="fa fa-cogs fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    Years of experience - {profile.experience}
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    Bangaluru, India
                  </p>
                  <p>
                    <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    {profile.email}
                  </p>
                  <p>
                    <i className="fa fa-chalkboard fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    Class Specialization - {profile.classsp}
                  </p>
                  <p>
                    <i className="fa fa-book-open fa-fw w3-margin-right w3-large w3-text-blue"></i>
                    Subject Specialization - {profile.subject}
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container card border py-4 mb-5 col-12">
          <div className="d-flex justify-content-between align-items-center mx-5">
            <h3 className="text-right">Your Accepted Bookings</h3>
          </div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />        
          <div className="row px-5">
            {bookings.map((booking, index) => (
              <div className="col-4 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{booking.title}</h5>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Start Date :</b> {booking.start.substring(0, 10)}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>End Date :</b> {booking.end.substring(0, 10)}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                    >
                      <b>Mentee :</b> {booking.createdBy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card card-body  mt-n7">
        <div className="row gx-4 mb-2">
          <h3 className="mb-0 text-2xl">Testimonial Section</h3>
          <h5 className="mt-3">{profile.reviews && profile.reviews.length === 0 && "No Reviews Yet"}</h5>  
          <section style={{ paddingTop: "10px" }}>
            <div className="container my-3">
              <div className="row">
                {profile.reviews !== undefined ? (
                  profile.reviews.map((rev) => (
                    <div className="col-lg-3 col-md-8 pt-3">
                      <div
                        className="card  text-white bg-gradient-primary"
                        style={{ backgroundColor: "#231f38" }}
                      >
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#28223f" }}
                        >
                          <h4 className="mt-0 text-white">{rev.review}</h4>
                          <div className="author align-items-center mt-2">
                            <div className="name">
                              <p
                                style={{
                                  marginBottom: "0",
                                  color: "rgb(206, 205, 205)",
                                }}
                              >
                                {rev.fromName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h5>No testimonials</h5>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
