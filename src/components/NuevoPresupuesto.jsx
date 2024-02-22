import {useState} from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!presupuesto || presupuesto <= 0){
           setMensaje("No es un presupuesto válido")
            return
        } 
        setMensaje('')    
        setPresupuesto(presupuesto)
        setIsValidPresupuesto(true)

    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">

            <label htmlFor="">Define el presupuesto</label>
           
            <input type="number" 

            className="nuevo-presupuesto"
            placeholder="Añadir presupuesto"
            value={presupuesto} 
            onChange={(e)=>setPresupuesto(Number(e.target.value))}      
            />
        { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
