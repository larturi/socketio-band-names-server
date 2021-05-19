import React, { useContext } from 'react';
import { SocketContext } from '../context/socketContext';

import { BandList } from '../components/BandList';
import { BandAdd } from '../components/BandAdd';
import { BandChart } from '../components/BandChart';


function HomePage() {

  const { online } = useContext(SocketContext);

  return (
    <div className="container">

      <div className="alert">
        <p>Service status: 
          {
            (online)     
              ? <span className="text-success"> online</span>
              : <span className="text-danger"> offline</span>
          }
          
        </p>
      </div>

      <h3>BandNames</h3>
      <hr />

      <div className="row mb-3">
        <div className="col-12 col-lg-5">
          <BandAdd />
        </div>
      </div>

      <div className="row">

        <div className="col-12 col-lg-5 mb-3">
          <BandList />
        </div>

        <div className="col-12 col-lg-7 mb-3">
          <BandChart />
        </div>

      </div>

    </div>
  );
}

export default HomePage;
