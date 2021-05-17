import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:3001', {
    transports: ['websocket']
  });
  return socket;
}

function App() {

  const [ socket ] = useState(connectSocketServer());
  const [ online, setOnline ] = useState(false);
  const [ bands, setBands ] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true)
    })
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket]);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      console.log(bands);
      setBands(bands);
    })
  }, [socket]);

  const votar = (id) => {
    socket.emit('votar-banda', id);
  };

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
          <BandList 
            data={bands}
            votar={votar}
          />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
  );
}

export default App;
