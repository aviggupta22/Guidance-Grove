import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sessionitem(props) {
  let { session } = props;
  let navigate = useNavigate();
  async function enrolledSession(
    title,
    description,
    date,
    time,
    creator,
    link
  ) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/sessions/enrollsession`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            title,
            description,
            date,
            time,
            creator,
            link,
          }),
        }
      );
      await response.json();
      props.showAlert("Session Enrolled Succesfully", "success");
      navigate("/aboutmentee");
    } catch (error) {
      return error;
    }
  }
let imgurl='';
if(session.subject==='Science') imgurl='https://www.thehindu.com/education/jy3dkh/article33948588.ece/alternates/FREE_615/27epbs-science'
else if(session.subject==='English') imgurl='https://www.englishcollege.com/sites/default/files/field/image/shutterstock_351287672.jpg'
else if(session.subject==='Math') imgurl='https://www.uml.edu/Images/math-equations_tcm18-331050.jpg?w=x'
else imgurl='https://cdn.talkesport.com/wp-content/uploads/technology-esports.jpg'

  return (
    <div className="card text-white mx-3" style={{ width: "19rem", backgroundColor:'#231f38' }}>
      <img className="card-img-top" src={imgurl}  height={'220px'} alt="subject description" />
      <div className="card-body" style={{backgroundColor:'#28223f'}}>
        <h5>{session.title}</h5>
        <h5 className="card-title text-muted ">
          Time: <span>{session.date}</span> at <span>{session.time}</span>
        </h5>
        <p className="card-text">
          <span>Subject: </span>
          {session.subject}
        </p>
        <p className="card-text">
          <span>Topic: </span>
          {session.topic}
        </p>
        <p className="card-text">
          <span>For Classes: </span>
          {session.classenrolled}
        </p>
        <p className="card-text">
          <span>Description: </span>
          {session.description}
        </p>
        <p className="card-text">
          <span>Created By: </span>
          {session.creator}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            enrolledSession(
              session.title,
              session.description,
              session.date,
              session.time,
              session.creator,
              session.link
            );
          }}
        >
          Enroll in session
        </button>
      </div>
    </div>
  );
}
