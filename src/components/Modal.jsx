import { useState } from "react";
import cerrar from "../img/cerrar.svg";
import Mensaje from "./Mensaje"

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("")


  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, cantidad, categoria].includes('')){
        setMensaje("Rellene todos los campos")

        setTimeout(() => {
            setMensaje("")
        }, 2000);
        return
    }

    guardarGasto({nombre, cantidad, categoria})

  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrar} alt="icono cerrar" onClick={ocultarModal} />
      </div>

      <form
       onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo gasto</legend>
        { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad: </label>
          <input
            type="number"
            placeholder="Añade cantidad del gasto. Por ejemplo: 400"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría: </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
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
        <input type="submit" value="Añadir gasto" />
      </form>
    
    </div>
  );
};

export default Modal;
