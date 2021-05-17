import React from 'react';

export const BandAdd = () => {
    return (
        <>
            <h5>Agregar Banda</h5>

            <form>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Nombre de la banda"
                />
            </form>
        </>
    )
}
