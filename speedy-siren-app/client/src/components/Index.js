import React from 'react';
import { Carousel } from 'react-bootstrap'; // You'll need to install react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'; // Update this path based on your project structure
import './responsive.css'; // Update this path based on your project structure
import Popup from './Popup.js'
import {useState} from 'react';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  function handleButtonClick() {
    setShowPopup(true);
  }
  function handleClose() {
    setShowPopup(false);
  }
  return (
    <div className="hero_amb">
      <div className="hero_bg_box">
      </div>
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>High-Quality Healthcare Services</h1>
                <p>
                  Our dedicated team of professionals strives to provide the
                  best medical care for our patients. Our state-of-the-art
                  facilities and commitment to excellence ensure you receive
                  the highest quality treatment.
                </p>
                <button onClick={handleButtonClick} class="button-48" role="button"><span class="text">Book an Ambulance</span></button>
                <Popup showPopup={showPopup} onClose={handleClose} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
