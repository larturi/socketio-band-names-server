import React, { useContext } from 'react';
import { SocketContext } from '../context/socketContext';

import { BandList } from '../components/BandList';
import { BandAdd } from '../components/BandAdd';


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

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
  );
}

export default HomePage;
