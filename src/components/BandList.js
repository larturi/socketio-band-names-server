import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/socketContext';

export const BandList = () => {

    const [ bands, setBands ] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (bands) => {
          setBands(bands);
        });

        return () => socket.off('current-bands');
      }, [socket]);

    const cambioNombre = (event, id) => {
        const nuevoNombre = event.target.value;
        setBands( bands => bands.map( band => {
            if (band.id === id ) {
                band.name = nuevoNombre
            }
            return band;
        }));
    };

    const onLostFocus = (id, nombre) => {
        socket.emit('cambiar-nombre-banda', { id, nombre });
    };

    const votar = (id) => {
        socket.emit('votar-banda', id);
    };

    const borrar = (id) => {
        socket.emit('borrar-banda', id);
    };

    const crearRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button 
                            className="btn btn-primary"
                            onClick={ () => votar(band.id) }
                        >+1</button>
                    </td>
                    <td>
                        <input 
                            className="form-control"
                            type="text" 
                            value={band.name}
                            onChange={ (event) => cambioNombre(event, band.id) }
                            onBlur={ () => onLostFocus(band.id, band.name) }
                        />
                    </td>
                    <td>
                        <h3>{band.votes}</h3>
                    </td>
                    <td>
                        <button 
                            className="btn btn-danger"
                            onClick={ () => borrar(band.id) }
                        >Borrar</button>
                    </td>
                </tr>
            ))
        )
    };

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Banda</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>

                <tbody>
                    { crearRows() }
                </tbody>
            </table>
        </>
    )
}
