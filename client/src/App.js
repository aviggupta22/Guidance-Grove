import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/mentee/Home";
import About from "./components/mentor/About";
import AboutMentee from "./components/mentee/AboutMentee";
import Discussion from "./components/mentee/Discussion";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import StudentNotes from "./components/mentee/StudentNotes";
import Session from "./components/mentor/Session";
import { Login } from "./components/Login";
import { Signup } from "./components/mentor/Signup";
import { useState } from "react";
import SignupHome from "./components/SignupHome";
import { SignupMentee } from "./components/mentee/SignupMentee";
import DirectMessaging from "./components/DirectMessaging";
import ViewProfile from "./components/mentee/ViewProfile";
import NotificationMentor from "./components/mentor/NotificationMentor";
import Books from "./components/mentee/Books";
import { Notfound } from "./components/Notfound";
import { HomePage } from "./components/HomePage";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/aboutmentee" element={<AboutMentee />} />
              <Route exact path="/chat" element={<DirectMessaging />} />
              <Route exact path="/discussion" element={<Discussion />} />
              <Route exact path="/student_notes" element={<StudentNotes showAlert={showAlert} />} />
              <Route exact path="/session" element={<Session showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signuphome" element={<SignupHome showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
              <Route exact path="/signupmentee" element={<SignupMentee showAlert={showAlert} />} />
              <Route exact path="/viewProfile/:id" element={<ViewProfile showAlert={showAlert} />} />
              <Route exact path="/notify" element={<NotificationMentor showAlert={showAlert} />} />
              <Route exact path="/books" element={<Books showAlert={showAlert} />} />
              <Route exact path="/homepage" element={<HomePage />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </Router>
        <footer className="footer py-2 text-muted ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 mb-lg-0 mb-4">
                <div className="text-center text-sm">
                Made with ❤️ by
                  <b> Avi</b>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </NoteState>
    </>
  );
}

export default App;
