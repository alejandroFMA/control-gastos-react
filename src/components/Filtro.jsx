import { useEffect, useState } from "react";

function Filtro({ filtro, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo campofiltro">
          <label> Filtrar gastos</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- Seleccione una categoría --</option>
            <option value="ahorro">Ahorro</option>
            <option value="ocio">Ocio</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="salud">Salud</option>
            <option value="suscripcion">Suscripción</option>
            <option value="coche">Coche</option>
            <option value="seguros">Seguros</option>
            <option value="gastos">Gastos varios</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filtro;
