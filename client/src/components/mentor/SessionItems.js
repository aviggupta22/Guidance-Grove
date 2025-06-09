import React, { useContext } from "react";
import sessionContext from "../../context/notes/noteContext";

export default function Sessionitem(props) {
  const context = useContext(sessionContext);
  const { deleteSession } = context;
  let { session, updateSession } = props;
  return (
    <>
          <div className="card  text-white mb-3 mx-3" style={{maxWidth:" 19rem", backgroundColor:'#231f38'}}>
          <div className="card-header d-flex align-items-center">
          <h4>{session.title}</h4>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteSession(session._id);
                props.showAlert("Deleted Succesfully", "success");
              }}
              type="button"
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateSession(session);
              }}
              type="button"
            ></i>
          </div>
          <div className="card-body" style={{backgroundColor:'#28223f'}}> 
          <h5 className="card-title text-white">Time: <span>{session.date}</span> at <span>{session.time}</span></h5>           
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
            <span>Joining Link: </span>
            <a href={session.link} target="_blank" rel="noreferrer">
              {session.link}
            </a>
          </p>
           
          </div>
        </div>
        </>
  );
}
