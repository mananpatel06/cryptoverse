import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  // console.log("crypto ", cryptosList.status);
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          const profit = currency.change >= 0;
                return (
                  <Col
                    xs={24}
                    sm={12}
                    lg={6}
                    className="crypto-card"
                    key={currency.uuid}
                  >
                    {/* {console.log('cryptosList?.data?.coins ', cryptosList?.data?.coins)} */}
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                      <Card
                        title={`${currency.rank}. ${currency.name}`}
                        extra={<img className="crypto-image" src={currency.iconUrl} />}
                        hoverable
                      >
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Change:
                          <span style={{
                            color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                            fontWeight: 600 }}
                          > {profit && '+'}{currency.change}%
                          </span>
                        </p>
                      </Card>
                    </Link>
                  </Col>

              );
              })}
      </Row>
      {/* {console.log('exchangesList ', cryptosList)} */}
    </>
  );
};

export default Cryptocurrencies;
