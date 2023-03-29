import NavBar from "./css/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer";
function Nav(props){
    return  <header className="contenedorNav">
    
    <h1>HardWorld</h1>
    <nav className="NavBar">
        <ul>
            <li><a href="">Almacenamiento</a></li>
            <li><a href="">Placas de video</a></li>
            <li><a href="">Procesadores</a></li>
            <li><a href="">Periféricos</a></li>
            <li><CartWidget/>0</li>
        </ul>
    </nav>

    
        
   
</header>;
    }
    export default Nav
