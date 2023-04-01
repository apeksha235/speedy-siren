import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'; // Update this path based on your project structure
import './responsive.css'; // Update this path based on your project structure
import { Link } from "react-router-dom";
import Index from './Index'
import WhyChooseUs from './WhyChooseUs';
import WhatsappChat from './WhatsappChat';
import Counter from './Counter';
import FareCalc from './FareCalc';
import logo from "../images/logo.jpeg"
import { useState,useRef } from 'react';
import axios from 'axios';


const Contact = () => { 
  const [choose, setchoose] = useState(false)
  const divRefs = useRef([]);
  function handleClick(index) {
    divRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  }
  const handleChoose=()=>{
    window.location.reload();
  }
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    emailPassword: '', // Add this line
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }
  };
  return (  
  <div className="sub_page">
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
        <img src={logo} alt="Orthoc Logo" height="50px" width="50px" style={{ marginRight: '8px' }} />
          <a className="navbar-brand" href="index.html">
          <span>
  <span style={{ color: '#f91942' }}>Speedy</span> <span style={{ color: '#212121' }}>Siren</span>
</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleClick(0)}>
                  Home{' '}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                    handleClick(1);
                    handleChoose();
                  }}>
                  {' '}
                  Why choose us?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleClick(2)}>
                  Fare Calculator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleClick(3)}>
                  Insights
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleClick(4)}>
                Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                About Us
                </a>
              </li>
              <form onSubmit={handleSubmit} className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <Index/>
    <FareCalc 
    divRefs={divRefs}
    />
    <WhyChooseUs
    divRefs={divRefs}
    />
    <WhatsappChat/>
    <Counter
    divRefs={divRefs}
    />
    {/* end header section */}
  </div>
      <section className="contact_section layout_padding">
        <div ref={(el) => (divRefs.current[4] = el)} className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container contact-form">
                <form action="">
                  <div className="form-row">
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42003.67428690409!2d2.1419831582031286!3d48.853831199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b367e305237%3A0xb0e4841b8b3129c5!2sSpeedy!5e0!3m2!1sen!2sin!4v1680277180885!5m2!1sen!2sin" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Contact;


