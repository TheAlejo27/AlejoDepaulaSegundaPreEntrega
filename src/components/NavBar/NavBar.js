import NavBar from "./css/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./IMG/logo.png"

function Nav(props) {
    return <header className="contenedorNav">

        <div className="tituloConLogo">
            <img src={logo} alt=""/>
                <h1>HardWorld</h1>
        </div>
        <nav className="NavBar">
            <ul>
                <li><a href="http://localhost:3000/">Almacenamiento</a></li>
                <li><a href="http://localhost:3000/">Placas de video</a></li>
                <li><a href="http://localhost:3000/">Procesadores</a></li>
                <li><a href="http://localhost:3000/">Periféricos</a></li>
                <li><CartWidget />0</li>
            </ul>
        </nav>
    </header>;
}
export default Nav
