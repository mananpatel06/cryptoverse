import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Typography, Space } from 'antd';
import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Profile, ProtectedRoute, ProtectedLogin } from './components';
import './App.css';

import Loginpage from './Pages/Loginpage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import UpdateProfile from './components/UpdateProfile';
import Signuppage from './Pages/Signuppage';
import Exchanges from './components/Exchanges';
import { AuthProvider } from './Authentication/AuthContext';

import Landingpage from './Pages/Landingpage';

const App = () => {
  const location = useLocation();
  const mainPage = location.pathname === '/';
  const signuppage = location.pathname === '/signup';
  const loginpage = location.pathname === '/login';
  const forgotPage = location.pathname === '/forgot-password';

  return (

    <AuthProvider>
      {(mainPage || signuppage || loginpage || forgotPage)
      ? (
        <>
          <div>
            <switch>
              <Route exact path="/">
                <Landingpage />
              </Route>

              <ProtectedLogin exact path="/signup" component={Signuppage} />
              <ProtectedLogin path="/login" component={Loginpage} />
              <ProtectedLogin path="/forgot-password" component={ForgotPasswordPage} />

            </switch>
          </div>
        </>
)
: (
  <>
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

        <div className="routes">
          <Switch>
            {/* <Route exact path="/">
                      <Landingpage />
                    </Route> */}
            {/* <ProtectedRoute exact path="/home">
              <Homepage />
            </ProtectedRoute> */}
            {/* <Route exact path="/exchanges">
              <Exchanges />
            </Route> */}
            {/* <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route> */}
            {/* <Route exact path="/profile">
              <Profile />
            </Route> */}

            <ProtectedRoute path="/update-profile" component={UpdateProfile} />
            <ProtectedRoute path="/home" component={Homepage} />
            <ProtectedRoute path="/exchanges" component={Exchanges} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/news" component={News} />
            <ProtectedRoute path="/cryptocurrencies" component={Cryptocurrencies} />
            <ProtectedRoute path="/crypto/:coinId" component={CryptoDetails} />

          </Switch>
        </div>

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
      </div>
    </div>
  </>
  )}
    </AuthProvider>

  );
};

export default App;
