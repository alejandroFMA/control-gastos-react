import {useState, useEffect} from "react";
import { formatearCantidad } from "../helpers";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto, gastos}) => {

const [disponible, setDisponible]=useState(0)
const [gastado, setGastado]=useState(0)
const [porcentaje, setPorcentaje] =useState(0)

  useEffect(() => {
    
  const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
  const totalDisponible = presupuesto-totalGastado
  const totalPorcentaje= (((presupuesto - totalDisponible)/presupuesto) * 100).toFixed(2)
  setGastado(totalGastado)
  setDisponible(totalDisponible)
  setPorcentaje(totalPorcentaje)
  }, [gastos])




  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
        value={porcentaje}
        text={`${porcentaje}% gastado`}
        styles={buildStyles({
          pathColor: '#3B82F6',
          trailColor: '#F5F5F5',

        })}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p>
            <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
            <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>


      </div>
    </div>
  );
};

export default ControlPresupuesto;
