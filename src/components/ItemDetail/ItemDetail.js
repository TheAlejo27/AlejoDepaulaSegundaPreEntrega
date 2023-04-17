import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handledAdd = (quantity) => {
        setQuantityAdded(quantity)

    }


    return(
        <article>
            <header>
                <h1>
                    {id}
                </h1>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    {category}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    {price}
                </p>
                <p>
                    {stock}
                </p>
            </section>
            <footer>
            {
                quantityAdded  > 0? (
                    <Link to='/cart'>Terminar mi compra</Link>
                ):(
                    <ItemCount initial={1}stock={stock} onAdd={handledAdd}/>
                )
            }
            </footer>
        </article>
    );
}

export default ItemDetail