import React from 'react';
import './Contacto.css'

function Contacto({nombre, apellido, telefono}){
    return(
        <div className="contenedor">
            <div className="fila">
                <div className="columna">
                    Nombre:
                </div>
                <div className="columna">
                    {nombre}
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Apellido:
                </div>
                <div className="columna">
                    {apellido}
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Telefono:
                </div>
                <div className="columna">
                    {telefono}
                </div>
            </div>

        </div>
    );
}

export default Contacto;
