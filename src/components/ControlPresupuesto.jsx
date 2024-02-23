import { useState, useEffect } from "react";
import { formatearCantidad } from "../helpers";
import Swal from 'sweetalert2'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setPresupuesto,
  setGastos,
  setIsValidPresupuesto
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
    const totalPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setPorcentaje(totalPorcentaje);
  }, [gastos]);

  const handleReset = () => {

    Swal.fire({
      title: "¿Deseas reiniciar la aplicación? ",
      text: " Se perderán todos los datos guardados",
      icon: "warning",
      width: 600,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, reiniciar",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Reiniciado!",
          text: "Tus datos fueron borrados.",
          icon: "success"
        });
        setGastos([])
        setPresupuesto(0);
        setIsValidPresupuesto(false);
        
      }
    });


    // const resultado = confirm(
    //   "¿Deseas reiniciar la aplicación? Se perderán todos los datos guardados"
    // );
    // if (resultado) {
    //   setGastos([])
    //   setPresupuesto(0);
    //   setIsValidPresupuesto(false);
      
    // }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% gastado`}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            textColor: porcentaje > 100 ? "#DC2626" : "black",
            trailColor: "#F5F5F5",
          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Resetear aplicación
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible}` < 0 ? "negativo" : ""}>
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
