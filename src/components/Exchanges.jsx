import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card } from 'antd';
import axios from 'axios';
import Loader from './Loader';

const Exchanges = ({ simplified }) => {
 const [exchangesList, setExchangesList] = useState();

 useEffect(async () => {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges');

  setExchangesList(data);
}, []);

if (!exchangesList) return <Loader />;

  return (
    <>

      <Row gutter={[32, 32]} className="crypto-card-container">

        { exchangesList?.map((exchange) => {
    if (simplified && (exchange.trust_score_rank < 11)) {
 return (
   <>
     <Col
       xs={24}
       sm={12}
       lg={6}
       className="crypto-card"
     >

       <Card
         title={`${exchange.trust_score_rank}. ${exchange.name}`}
         extra={<img className="crypto-image" src={exchange.image} />}
         hoverable
       >
         <p>Country:{exchange.country ? exchange.country : 'NA' }</p>
         <p>Year established: {exchange.year_established ? exchange.year_established : 'NA'}</p>
         <Button type="primary"><a href={exchange.url} target="_blank" rel="noreferrer">{exchange.name}</a></Button>
       </Card>
     </Col>
   </>
);
}

if (!simplified) {
    return (
      <>
        <Col
          xs={24}
          sm={12}
          lg={6}
          className="crypto-card"
        >

          <Card
            title={`${exchange.trust_score_rank}. ${exchange.name}`}
            extra={<img className="crypto-image" src={exchange.image} />}
            hoverable
          >
            <p>Country: {exchange.country ? exchange.country : 'NA' }</p>
            <p>Year established: {exchange.year_established ? exchange.year_established : 'NA'}</p>
            <Button type="primary"><a href={exchange.url} target="_blank" rel="noreferrer">{exchange.name}</a></Button>
          </Card>

        </Col>
      </>
);
}
return <></>;
})}

      </Row>

      {/* {console.log('exchangesList ', exchangesList)} */}
    </>
  );
};

export default Exchanges;
