import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
      <h1>PLANIFICADOR DE GASTOS</h1>
      {isValidPresupuesto ? (
       <ControlPresupuesto
       presupuesto={presupuesto}
       gastos={gastos}
       setPresupuesto={setPresupuesto}
       setGastos={setGastos}
      setIsValidPresupuesto={setIsValidPresupuesto}/>
      ) :
      <NuevoPresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
     /> }  
    </header>
  )
}

export default Header
