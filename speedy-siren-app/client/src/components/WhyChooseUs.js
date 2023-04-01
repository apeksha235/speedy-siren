import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAnchor, faHourglassHalf, faClock, faAmbulance } from '@fortawesome/free-solid-svg-icons';

function WhyChooseUs() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4><span>Why Choose</span> Us?</h4>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_one">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <h3 style={{ fontFamily: 'sans-serif' }}>Emergency Assistance time less than 15 mins</h3>
              <p>We use latest technology and find the best route and nearest ambulance.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_two">
                <FontAwesomeIcon icon={faAmbulance} />
              </span>
              <h3 style={{ fontFamily: 'sans-serif' }}>Well Equipped Ambulance</h3>
              <p>That ambulance is well-equipped with advanced medical equipment to assist in the management of an injured or sick person.The immediate and professional care that our ambulances and paramedic services provided to a critically ill or injured patient frequently has  saved hundreds of lives.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_three">
                <FontAwesomeIcon icon={faHourglassHalf} />
              </span>
              <h3 style={{ fontFamily: 'sans-serif' }}>24 x 7 User Support</h3>
              <p>If our customer has any problem and any query we are always happy to help then.Feel free to contact us on our toll free number at any time of the day and we will be happy to assist you </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
