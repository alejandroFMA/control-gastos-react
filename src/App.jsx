import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});


useEffect(() => {
if (Object.keys(gastoEditar).length > 0){  
  setModal(true);
  setTimeout(() => {
    setAnimarModal(true);
  }, 500);
}
  
}, [gastoEditar])


  const handleNuevoGasto = () => {

    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {

    if(gasto.id){
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState )
      setGastos(gastoActualizado)
      setGastoEditar({})
    } else {
      gasto.id= generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);    
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <>
    <div className={modal && "fijar"}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      {isValidPresupuesto && (
        <>
        <main>
        <ListadoGastos 
        gastos={gastos}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}/>
        </main>
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto}
          />  
        </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
      </div>
    </>
  );
}

export default App;
