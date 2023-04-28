import React from 'react';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BannerBackground from '../images/home-banner-background1.png';
import { Navbar2, Login } from '../components';
import '../Landingpage.css';
import AboutBackground from '../images/about-background1.png';

const Loginpage = () => (
  <>
    <div className="App">
      <div className="home-container">
        <Navbar2 />
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Login />
        </div>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
      </Container>
    </div>

    <div className="footer" style={{ marginTop: '110px' }}>
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

export default Loginpage;
