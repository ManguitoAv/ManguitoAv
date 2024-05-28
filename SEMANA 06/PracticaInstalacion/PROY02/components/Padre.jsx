import React from 'react'
import { Hijo } from './Hijo'

export const Padre = () => {
    let nombre='Manguito'
    let direccion='Lima 120'
  return (
    <div>
        <div>Componente Padre</div>
        <Hijo nom={nombre} dir={direccion}/>
    </div>
  )
}
