import React from 'react';
import '../FlowTable.css';
import login from '../images/login.png';
import manage from '../images/manage.png';
import chart from '../images/chart.png';

const FlowTable = () => (
  <>
    <section>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="tableCard text-center">
                <div className="title">
                  <img src={chart} />
                  <h2>Realtime Tracking</h2>
                </div>
                <div className="option">
                  <p>Track your crypto in realtime in our dashboard</p>
                </div>
              </div>
            </div>

            {/* <!-- END Col One --> */}
            <div className="col-md-4">
              <div className="tableCard text-center">
                <div className="title">
                  <img src={manage} />
                  <h2>Watchlist Crypto</h2>
                </div>
                <div className="option">
                  <p>Add your favourite crypto into your watchlist</p>
                </div>
              </div>
            </div>
            {/* <!-- END Col Two --> */}
            <div className="col-md-4">
              <div className="tableCard text-center">
                <div className="title">
                  <img src={login} />
                  <h2>Free Sign Up</h2>
                </div>
                <div className="option">
                  <p>Our services are free of cost, just create your account</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
  );

export default FlowTable;
