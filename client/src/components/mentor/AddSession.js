import React, { useContext, useState } from "react";
import sessionContext from "../../context/notes/noteContext";

export const AddSession = (props) => {
  const context = useContext(sessionContext);
  const { addSession } = context;
  const [session, setsession] = useState({
    creator: "",
    title: "",
    subject: "",
    topic: "",
    classenrolled: "",
    date: "",
    time: "",
    description: "",
    link: ""
  });

  const handleClick = (e) => {
    e.preventDefault();
    addSession(
      session.creator,
      session.title,
      session.subject,
      session.topic,
      session.classenrolled,
      session.date,
      session.time,
      session.description,
      session.link
    );
    setsession({
      creator: "",
      title: "",
      subject: "",
      topic: "",
      classenrolled: "",
      date: "",
      time: "",
      description: "",
      link: ""
    });
    props.showAlert("Session Added Successfully", "success");
  };

  const onChange = (e) => {
    setsession({ ...session, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <h1 className="mb-4">Add a Session</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4 shadow">
              <form id="contact-form" onSubmit={handleClick}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="creator">Creator *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="creator"
                      name="creator"
                      value={session.creator}
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="title">Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={session.title}
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={session.subject}
                      onChange={onChange}
                      required
                    >
                      <option value="" disabled>
                        --Select Your Subject--
                      </option>
                      <option>DSA</option>
                      <option>Web Development</option>
                      <option>Machine Learning & AI</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="topic">Topics *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="topic"
                      name="topic"
                      placeholder="Please enter the topics"
                      value={session.topic}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="classenrolled">Class</label>
                    <input
                      type="number"
                      className="form-control"
                      id="classenrolled"
                      name="classenrolled"
                      value={session.classenrolled}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="date">Session Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={session.date}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="time">Time *</label>
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={session.time}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="link">Joining Link *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please provide the joining link"
                      id="link"
                      name="link"
                      value={session.link}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="description">Description *</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      id="description"
                      name="description"
                      value={session.description}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Add Session
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
