import React, { useState } from 'react';

export const BandAdd = ({crearBanda}) => {

    const [ valor, setValor ] = useState('')

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (valor.trim().length > 0) {
            crearBanda(valor);
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
