import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatearFecha } from "../helpers";
import { formatearCantidad } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoCoche from "../img/icono_coche.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSeguros from "../img/icono_seguros.svg";
import IconoSuscripcion from "../img/icono_suscripciones.svg";

function Gasto({ gasto, setGastoEditar }) {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  const diccionarioIconos = {
    ahorro: IconoAhorro,
    ocio: IconoOcio,
    comida: IconoComida,
    casa: IconoCasa,
    salud: IconoSalud,
    suscripcion: IconoSuscripcion,
    coche: IconoCoche,
    seguros: IconoSeguros,
    gastos: IconoGastos,
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("borrar")}>Borrar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="icono gasto" />
            <div className="descripcion-gasto" id={id}>
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;
