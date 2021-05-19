import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/socketContext';

export const BandAdd = () => {

    const [ valor, setValor ] = useState('');
    const { socket } = useContext(SocketContext)

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (valor.trim().length > 0) {
            socket.emit('nueva-banda', { nombre: valor });
            setValor('');
        }
        
    };

    return (
        <>
            <h5>Agregar Banda</h5>

            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Nombre de la banda"
                    value={valor}
                    onChange={ (ev) => setValor(ev.target.value) }
                />
            </form>
        </>
    )
}
