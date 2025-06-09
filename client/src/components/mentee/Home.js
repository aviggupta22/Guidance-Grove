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
  const [totalcards, settotalcards] = useState([])
  const [filterCard, setFilter] = useState({ class: "", subject: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/homepage");
    }
    if (localStorage.getItem("role")==="mentor") {
      navigate("/about");
    }
    getSessionsMentee();
    getAllUsers();
    // eslint-disable-next-line
  }, []);
  async function getAllUsers() {
    const response = await fetch(`http://localhost:5000/api/auth/getAllusers`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setusercards(data);
    settotalcards(data)
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const context = useContext(sessionContext);
  const { sessions, getSessionsMentee } = context;

  async function handleSubmit(e) {
    e.preventDefault();
    const res = totalcards.filter(
      (card) =>{
        if(filterCard.class && filterCard.subject) return card.classsp === filterCard.class &&  card.subject === filterCard.subject && card.role === "mentor"
        else if(filterCard.class) return card.classsp === filterCard.class && card.role === "mentor"
        else if(filterCard.subject) return card.subject === filterCard.subject && card.role === "mentor"
        else return card.role === "mentor"
      }
    );
    setusercards(res);
  }
  const onChange = (e) => {
    setFilter({ ...filterCard, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
    <div className="col-12 mt-3">
      <h2>Top Free Sessions By mentors</h2>
            <div className="row my-3 py-3"  >
            <Carousel responsive={responsive}>
            {sessions.map((session) => {
          return (
            <SessionitemMentee
              key={session._id}
              session={session}
              showAlert={props.showAlert}
            />
          );
        })}
</Carousel>
            
        </div></div>
      <div className="container mt-5">
      <h1>Discover Top mentors</h1>
      <form onSubmit={handleSubmit}>
        <div className="conatiner mt-3">
          <div className="container">
            <div className="row">
              <h5>Filter By class and Subjects</h5>
              <div className="col-3">
                <select
                  className="form-select"
                  name="class"
                  onChange={onChange}
                  aria-label="Default select example"
                >
                  <option defaultValue value="">Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="col-3">
                <select
                  className="form-select"
                  name="subject"
                  onChange={onChange}
                  aria-label="Default select example"
                >
                  <option defaultValue value="">Select Subject</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

        {
          <div className="col-12 mt-3">
            <div className="row">
              {usercards.map((usercards, index) => (
                
                <div className="col-xl-3 col-md-6 mb-xl-5 mb-7 mb-sm-6 mb-md-6 mb-lg-6 d-flex">
                 
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      width="500"
                      height="250"
                      src={usercards.img}
                      className="card-img-top"
                      alt={usercards.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{usercards.name}</h5>
                      <p
                        className="card-text"
                        style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                      >
                        <b>{usercards.work}</b> at {usercards.company}
                      </p>
                      <p
                        className="card-text"
                        style={{ fontSize: "14px", marginBottom: "0.3rem" }}
                      >
                        <b>Class Specialization :</b> {usercards.classsp}
                      </p>
                      <p className="card-text" style={{ fontSize: "14px", marginBottom: "0.3rem"  }}>
                        <b>Subject Specialization : </b> {usercards.subject}
                      </p>
                      <p className="card-text" style={{ fontSize: "14px" }}>
                        <b>Years of experience : </b> {usercards.experience}
                      </p>
                      <Link to={`/viewProfile/${usercards._id}`} className="btn btn-primary">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
