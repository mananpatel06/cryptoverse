import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AboutBackground from '../images/about-background1.png';
import AboutBackgroundImage from '../images/about-background-image.png';

const About = () => (
  <div className="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">Our Dashboard</p>
      <h1 className="primary-heading">
        A crypto management & tracker plarform
      </h1>
      <p className="primary-text">
        Track more than 100 cryptocurrencies, current trending crypto news and add your favourite cryptocurrencies into watchlist.
      </p>
      <p className="primary-text">
        You are just one click ahead to enter in the cryptoverse sign up now.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button" type="submit">
          <Link to="/signup">
            Sign Up Now
          </Link><FiArrowRight />{' '}
        </button>
      </div>
    </div>
  </div>
  );

export default About;
