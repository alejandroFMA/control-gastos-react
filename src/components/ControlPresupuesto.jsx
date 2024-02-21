import {useState, useEffect} from "react";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({presupuesto, gastos}) => {

const [disponible, setDisponible]=useState(0)
const [gastado, setGastado]=useState(0)

  useEffect(() => {
    
  const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
  const totalDisponible = presupuesto-totalGastado
  setGastado(totalGastado)
  setDisponible(totalDisponible)
  }, [gastos])




  // const arrayGastos = gastos.map(gasto => gasto.cantidad)
  // const gastado = arrayGastos.reduce((a,c) => (a + c),0 )

  // const disponible = presupuesto - gastado


    
   

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        Grafica
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
