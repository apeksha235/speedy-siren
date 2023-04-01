import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Contact from "../../components/Contact"
import Header from "../../components/Header"

const Home = () => {
//   useEffect(() => {
//     getYear();
//   }, []);

//   const getYear = () => {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     document.querySelector('#displayYear').innerHTML = currentYear;
//   };

  return (
    <>
    <Contact/>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <span>Us</span>
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_col">
              <div className="footer_contact">
                <h4>Reach at..</h4>
                <div className="contact_link_box">
                  <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="footer_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer_col">
              <div className="footer_detail">
                <h4>About</h4>
                <p>
                  Beatae provident nobis mollitia magnam voluptatum, unde dicta
                  facilis minima veniam corporis laudantium alias tenetur
                  eveniet illum reprehenderit fugit a delectus officiis
                  blanditiis ea.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto footer_col">
              <div className="footer_link_box">
                <h4>Links</h4>
                <div className="footer_links">
                  <Link className="" to="/">
                    Home
                  </Link>
                  <Link className="active" to="/about">
                    About
                  </Link>
                  <Link className="" to="/departments">
                    Departments
                  </Link>
                  <Link className="" to="/doctors">
                    Doctors
                  </Link>
                  <Link className="" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer_col">
              <h4>Newsletter</h4>
              <form action="#">
                <input type="email" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates<br /><br /></a>
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/">ThemeWagon</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;