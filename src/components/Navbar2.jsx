import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const Navbar2 = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav>
      <Typography.Title level={2} className="logo1"><a href="/">Cryptoverse</a></Typography.Title>
      <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      {activeMenu && (
      <Menu theme="dark" mode="horizontal" className="menubar">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signup">Signup</Link>
        </Menu.Item>
      </Menu>
      )}
    </nav>
  );
};

export default Navbar2;
