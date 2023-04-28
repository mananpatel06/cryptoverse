import React from 'react';
import '../Landingpage.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Typography, Space } from 'antd';
import BannerBackground from '../images/home-banner-background1.png';
import { Navbar2, About, FlowTable, Carousel } from '../components';

const Landingpage = () => (
  <>
    <div className="home-container">
      <Navbar2 />
      <div className="home-banner-container">
        {/* <img src={crypto} className="cryptoback" /> */}
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Unlock the Potential of Cryptocurrency with Our Real-Time Crypto Tracker!
          </h1>
          <p className="primary-text">
            We make crypto management easy and simple
          </p>
          <button className="secondary-button" type="submit">
            <Link to="/signup">
              Sign Up Now
            </Link><FiArrowRight />{' '}
          </button>
        </div>
      </div>
    </div>

    <FlowTable />

    <About />

    <Carousel />

    <div className="footer">
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023<span> </span>
        <Link to="/">
          Cryptoverse .
        </Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link to="/home">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  </>
  );

export default Landingpage;
