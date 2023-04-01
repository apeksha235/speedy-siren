import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Contact from "../../components/Contact"
import Header from "../../components/Header"
import about from '../../images/about.jpg'

const Home = () => {

  return (
    <>
    <Contact/>
    <section className="about_section layout_padding">
  <div className="container">
    <div className="row">
      {/* Move the image column here */}
      <div className="col-md-6">
        <div className="img-box-about">
          <img src={about} height="500px" width="1000px" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="detail-box">

                <div className="heading_container">
                  <h2>
                    About Our <span>Service</span>
                  </h2>
                </div>
                <p>
                A user in distress seeks assistance through a web application designed to locate nearby hospitals and assess their current traffic density. The app calculates the shortest possible time for an ambulance to reach the user by considering the distance of each hospital. Upon identifying the most efficient route, the app sends a notification to the selected hospital to dispatch an ambulance.
To further expedite the ambulance's arrival, the traffic signal system prioritizes the emergency vehicle by turning the signals green when the ambulance approaches an intersection, while other signals turn red. This ensures the ambulance reaches the user as quickly as possible.
                </p>



                {/* <Link to="/">Read More</Link> */}
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
                    <span>speedyysiren@gmail.com</span>
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
                  We at speedy siren provide the best and fastest service.
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
            {/* <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates<br /><br /></a>
              &copy; <span id="displayYear"></span> Distributed By
              <a href="https://themewagon.com/">ThemeWagon</a>
            </p> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;