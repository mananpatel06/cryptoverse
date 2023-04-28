/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../Landingpage.css';
import millify from 'millify';

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  // const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h';

    const { data } = await axios.get(api);

    // console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trending.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <>
        <img
          src={coin?.image}
          alt={coin.name}
          style={{ marginBottom: 10, height: '90px' }}
        /><br />
        <span style={{ marginBottom: 10, fontSize: 22 }}>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
              fontWeight: 900,
              fontSize: 22,
              marginBottom: 20,
            }}
          >
            {profit && '+'}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span><br />
        </span>
        <span style={{ fontSize: 28, fontWeight: 500, marginBottom: 10 }}>
            $ {millify(coin?.current_price)}
        </span>
      </>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
