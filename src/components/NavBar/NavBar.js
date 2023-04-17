import NavBar from "./css/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./IMG/logo.png"
import { Link, NavLink } from 'react-router-dom'

function Nav(props) {
    return <header className="contenedorNav">

        <div className="tituloConLogo">
            <img src={logo} alt="" />
            <h1>HardWorld</h1>
        </div>
        <nav className="NavBar">
            <Link to='/'>
                <div className="tituloConLogo">
                    <img src={logo} alt="" />
                    <h1>HardWorld</h1>
                </div>
            </Link>

            <div>
                <NavLink to={'/category/categoria1'}>Placa de Video Nvidia</NavLink>
                <NavLink to={'/category/categoria2'}  >Placa de Video AMD</NavLink>
                <NavLink to={'/category/categoria3'} >Auricular</NavLink>
                <NavLink to={'/category/categoria4'} >Procesadores Intel</NavLink>
                <NavLink to={'/category/categoria1'}>Procesadores AMD</NavLink>
            </div>
            <CartWidget />0

            {/* <ul>
                <li><a href="http://localhost:3000/">Almacenamiento</a></li>
                <li><a href="http://localhost:3000/">Placas de video</a></li>
                <li><a href="http://localhost:3000/">Procesadores</a></li>
                <li><a href="http://localhost:3000/">Periféricos</a></li>
                <li><CartWidget />0</li>
            </ul> */}
        </nav>
    </header>;
}
export default Nav
