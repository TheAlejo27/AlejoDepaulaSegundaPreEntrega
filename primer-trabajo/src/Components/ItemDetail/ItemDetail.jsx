import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { getDoc, doc, } from "firebase/firestore"
import { db } from "../Service/firebase/firebaseConfig";

function ItemDetail({ itemId }) {
  const [productos, setProduct] = useState(null);

  const { handleOnAdd, quantityAdded, } = useCart()

  useEffect(() => {
    if (itemId) {

      const docRef = doc(db, "productos", itemId)

      getDoc(docRef)
        .then(response => {
          const data = response.data()
          const productAdapted = { id: response.id, ...data }
          setProduct(productAdapted)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [itemId]);

  if (!productos) {
    return <div>Cargando...</div>;
  }


  console.log("Cantidad seleccionada: ", quantityAdded, productos)



  return (
    <>
      <div className=" bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
        <img className="w-full" src={productos.img} alt={productos.name} />
        <div className="px-6 py-4">
          <div className="text-zinc-600 font-bold text-xl mb-2">{productos.name}</div>
          <p className="text-gray-700 font-semibold text-base">{productos.category}</p>
          <p className="text-gray-600 font-bold text-base mb-2 pt-2">${productos.price}</p>
        </div>
        <div className="px-6 pt-0 pb-9">
        <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => handleOnAdd(quantity, productos)}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

