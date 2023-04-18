import style from "./css/style.css"
import { Link } from "react-router-dom"
const Item = ({ id, name, img, price }) => {

    return (
            <div className="productosDiv">
                <img className="imagenProducto" src={img} alt={name} />
                <p className="tituloProducto">{name}</p>
                <p className="precio">Precio: {price}</p>
                <button>Comprar</button>
            </div>
    );
}
export default Item