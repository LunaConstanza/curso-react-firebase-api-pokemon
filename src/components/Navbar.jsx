import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand ms-3' to='/'>APP POKE</Link>
        <div className="d-flex">
            <NavLink className='btn btn-dark me-2' to='/' exact>Inicio</NavLink>
            <NavLink className='btn btn-dark me-2' to='/login' exact>Login</NavLink>
            <button className="btn btn-dark me-2">Cerrar Sesión</button>
        </div>
    </div>
  )
}

export default Navbar