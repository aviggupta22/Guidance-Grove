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
                                <a href="https://www.youtube.com/watch?v=LfEDjgqoHL8&t=1s" target="_blank" rel="noreferrer" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
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
                                   Guidance Grove is a platform where
                                    students enroll to learn and obtain
                                    mentorship and volunteers enroll
                                    themselves to help / mentor those
                                    students.
                                </p>
                                <p>Tech Stack - By using the MERN stack this 
                                        website is created
                                        MERN stands for MongoDB, Express,
                                        React, and Node. </p>
                                <ul>
                                    <li>FRONTEND: React</li>
                                    <li>BACKEND: Node, Express</li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Apart from mentoring it also has
                                    some added features, like mentees
                                    can browse thousands of books,
                                    interact with peers, get group
                                    sessions and well as one to one
                                    sessions and all these for FREE

                                </p><br/>
                                <ul>
                                
                                    <li>DATABASE: MongoDB ATLAS,
                                        Firebase</li>
                                    <li>API USED: Google Books API</li>
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

                        <div className="row">
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/search.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="/">Search-Filter</a></h4>
                                    <p>Mentees can add filters/tags on their own needs
                                        and search for mentors accordingly. This has been
                                        provided to give mentees a say in the process,
                                        allowing them to select a particular mentor.
                                    </p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/session.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4><a href="/">Session</a></h4>
                                    <p>Mentors can create sessions which can be accessed
                                        by the mentees. They can cover important topics in
                                        the group session. Once the mentee enrolls in any
                                        session, it is displayed in their profile and they are
                                        also provided with joining link.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/chat.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4><a href="/">Communication tools</a></h4>
                                    <p>A chat feature on the website, where mentors and
                                        mentees can communicate. They can also share media
                                        files like pdf, pictures. There is feature of one-one chat as
                                        well as group chats and only the mentor has the access
                                        to delete or remove participants.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/discussion.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Discussion forum</a></h4>
                                    <p>A public conversation(chat room) that is accessible to all
                                        mentees in the discussion room. This will provide them to be
                                        able to openly discuss and communicate their concerns with
                                        everyone.</p>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/reviews.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Reviews</a></h4>
                                    <p>Mentees can review the mentors with
                                        whom they have enrolled. This will also
                                        assist all new commers in learning more
                                        about the mentors, as well as motivate
                                        mentors to improve their performance in
                                        order to receive better reviews.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/notes.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Notes</a></h4>
                                    <p>Mentees can write any important notes and
                                        store them.
                                        This will help them for capturing a quick
                                        thought or save something important for
                                        later.
                                        Mentees can also view and edit notes they
                                        created in the platform.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/books.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">Online books</a></h4>
                                    <p>Search the world'
                                        s most comprehensive
                                        index of full-text books.
                                        There are times when the user is unable
                                        to obtain the resources they require for
                                        reading, so we have designed an inbuilt
                                        function that allows them to browse any
                                        books of their choice using the Google
                                        Books API.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box text-center">
                                    <div className="pic text-center"><img src="/img/one-one.jpg" style={{ borderRadius: "50%" }} width="200px" className="img-fluid" alt="" /></div>
                                    <div className="icon"><i className="bx bx-layer"></i></div>
                                    <h4><a href="/">One to one booking</a></h4>
                                    <p>If a mentee wants to request one-on-one mentoring from a mentor, they
                                        can go to the mentor's profile and verify the mentor's availability, after
                                        which they can send the mentor a request for a one-on-one session.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

     

            </main>
        </div>
    );
};
