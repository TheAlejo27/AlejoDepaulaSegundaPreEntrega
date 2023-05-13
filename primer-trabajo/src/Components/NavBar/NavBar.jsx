import React from "react"
import NavBar from "./css/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./IMG/logo.png"
import { Link, NavLink } from 'react-router-dom'
function Nav(props) {
    return (<header className="contenedorNav">
        <nav className="NavBar">
            <Link to='/'>
                <div className="tituloConLogo">
                    <img src={logo} alt="" />
                    <h1>HardWorld</h1>
                </div>
            </Link>

            <div className="contenedorLink">
                <NavLink to={'/category/Placa de Video Nvidia'} className="links">Placa de Video Nvidia</NavLink>
                <NavLink to={'/category/Placa de Video AMD'} className="links" >Placa de Video AMD</NavLink>
                <NavLink to={'/category/Auriculares'} className="links">Auricular</NavLink>
                <NavLink to={'/category/Procesadores Intel'}className="links" >Procesadores Intel</NavLink>
                <NavLink to={'/category/Procesadores AMD'}className="links">Procesadores AMD</NavLink>
                <NavLink to={'/category/Teclado'}className="links">Teclados</NavLink>
                <NavLink to={'/category/Mouse'}className="links">Mouse</NavLink>
                <NavLink to={'/category/Disco Externo'}className="links">Disco Externo</NavLink>
                <NavLink to={'/category/Disco Solida'}className="links">Disco Solida</NavLink>
                <NavLink to={'/category/Disco Rigido'}className="links">Disco Rigido</NavLink>
            </div>
            <div className="cartWidget">
            <li ><CartWidget /></li>
            </div>
            
        </nav>
    </header>
    );
}
export default Nav

