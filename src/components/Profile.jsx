import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import millify from 'millify';
import { Row, Col, Card, Button, Divider } from 'antd';
import { Container } from 'react-bootstrap';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useAuth } from '../Authentication/AuthContext';
import Loader from './Loader';

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const { logout, currentUser, watchlist, count } = useAuth();

  const history = useHistory();
  let total = 10;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState();
  const inWatchlist = watchlist.length;
  let c = 0;

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.push('/login');
      // window.location.reload(true);
    } catch {
      setError('Failed to log out');
    }
  };
  const handleUpdate = () => {
    setError('');

    try {
      history.push('/update-profile');
    } catch {
      setError('Failed to update profile');
    }
  };

  // useEffect(() => {
  //   // eslint-disable-next-line no-return-assign
  //   watchlist?.map((coinId) => (
  //     // coin = useGetCryptoDetailsQuery(coinId)
  //       console.log("abc ",useGetCryptoDetailsQuery(coinId))
  //       ));
  // }, []);

  if (isFetching) return <Loader />;

  return (
    <>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '40vh' }}
      >
        <Card style={{ width: 400 }}>
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <div className="profileCard">
              <h2 className="text-center mb-4">Profile</h2>
              <strong>Email:</strong> {currentUser && currentUser.email}
              <div className="mt-2" />
              {/* <strong>Total :</strong> {millify(total)} $ */}
              <div className="mb-4" />
              <div className="d-grid gap-3">

                <Button type="primary" onClick={handleUpdate}>
                  Update Profile
                </Button>

              </div>
            </div>
            <div className="mb-4" />
            <div className="d-grid gap-3">
              <Button type="primary" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </Card>
      </Container>

      <h3 className="text-center mt-4">Watchlist</h3>
      {inWatchlist ? ' ' : (
        <div style={
          {
            display: 'flex',
            justifyContent: 'center',
          }
          }
        >
          <h5>No Items in Watchlist</h5>
        </div>
)}

      <Row gutter={[32, 32]} className="crypto-card-container">

        {
  cryptos?.map((currency) => {
  if (watchlist.includes(currency.uuid)) {
    c = count[watchlist.findIndex((wish) => wish === currency.uuid)];
    const profit = currency.change >= 0;
    if (c) total = millify((currency.price) * c);
return (
  <Col
    xs={24}
    sm={12}
    lg={6}
    className="crypto-card"
    key={currency.uuid}
  >

    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
      <Card
        title={`${currency.rank}. ${currency.name}`}
        extra={<img className="crypto-image" src={currency.iconUrl} />}
        hoverable
      >
        <p>Price of 1 coin: {millify(currency.price)} $</p>
        <p>Coins you have: {c}</p>
        <p>Market Cap: {millify(currency.marketCap)}</p>
        <p>Daily Change:
          <span style={{
              color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
              fontWeight: 600 }}
          > {profit && '+'}{currency.change}%
          </span>
        </p>
        <Divider />
        <p>Total : {(total)} $</p>
      </Card>
    </Link>

  </Col>
);
}
  return <></>;
})
}

      </Row>

      {/* {console.log('baseQuery ', baseQuery.status)} */}
    </>
  );
};

export default Profile;
