import React from "react";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <div>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: "250px" }}
                                alt="logo"
                            />
                            <h1>Guidance Grove</h1>
                            <h2>Guiding Today, Leading Tomorrow</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/login" className="btn-get-started scrollto">Login</a>
                                <a href="/signuphome" className="btn-get-started scrollto mx-3">Sign-Up</a>
                                <a href="https://www.youtube.com/watch?v=LfEDjgqoHL8&t=1s" target="_blank" rel="noreferrer" className="glightbox btn-watch-video">
                                    <i className="bi bi-play-circle"></i><span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About</h2>
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Guidance Grove is a platform where students enroll to learn and obtain mentorship,
                                    and volunteers enroll themselves to help / mentor those students.
                                </p>
                                <p>
                                    Tech Stack - Built using the MERN stack (MongoDB, Express, React, Node)
                                </p>
                                <ul>
                                    <li>FRONTEND: React</li>
                                    <li>BACKEND: Node, Express</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Apart from mentoring it also has some added features, like mentees can browse thousands of books,
                                    interact with peers, get group sessions and one-to-one sessions — all for FREE.
                                </p>
                                <br />
                                <ul>
                                    <li>DATABASE: MongoDB ATLAS, Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Features</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box text-center">
                                    <div className="pic text-center">
                                        <img src="/img/session.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" />
                                    </div>
                                    <h4><a href="/">Session</a></h4>
                                    <p>
                                        Mentors can create sessions which mentees can enroll in. Sessions include topic coverage,
                                        joining links, and display on user profiles.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box text-center">
                                    <div className="pic text-center">
                                        <img src="/img/discussion.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" />
                                    </div>
                                    <h4><a href="/">Discussion Forum</a></h4>
                                    <p>
                                        A public chatroom where all mentees can participate in discussions,
                                        seek help, and interact with the community.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center">
                                        <img src="/img/notes.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" />
                                    </div>
                                    <h4><a href="/">Notes</a></h4>
                                    <p>
                                        Mentees can write and store important notes, thoughts, or ideas.
                                        They can view and edit these later from their profile.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="500">
                                <div className="icon-box text-center">
                                    <div className="pic text-center">
                                        <img src="/img/one-one.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" />
                                    </div>
                                    <h4><a href="/">One-to-One Booking</a></h4>
                                    <p>
                                        Mentees can request personalized mentoring sessions by checking mentor availability
                                        and sending a one-to-one session request.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
