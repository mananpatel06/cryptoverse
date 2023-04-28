import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-alice-carousel/lib/alice-carousel.css';
import App from './App';
import store from './app/store';

import 'antd/dist/antd.css';

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // {/* </React.StrictMode>, */}
  document.getElementById('root'),
);

