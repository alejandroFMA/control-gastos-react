import React from "react";
import { formatearFecha } from "../helpers";
import { formatearCantidad } from "../helpers";

function Gasto({ gasto }) {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

   
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto" id={id}>
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">Agregado el: {""} 
          <span>{formatearFecha(fecha)}</span></p>
        </div>
      </div>
      <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
    </div>
  );
}

export default Gasto;
