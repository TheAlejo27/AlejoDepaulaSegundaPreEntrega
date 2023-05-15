import { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from "../Service/firebase/firebaseConfig";

function ItemList() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productos, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : query(collection(db, 'productos'), orderBy("type", "asc"))

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          console.log(data);
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
        console.log(productsAdapted);
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId]);

  function handleSelectProduct(itemId) {
    console.log(itemId);
    setSelectedProductId(itemId);
  }
console.log(productos);
  return (
    <>
      {selectedProductId ? (
        <ItemDetail itemId={selectedProductId} />
      ) : (
        productos &&
        productos.map((productos) => (
          <Item
            key={productos.id}
            productos={productos}
            onSelect={handleSelectProduct}
          />
        ))
      )}
    </>
  );
}

export default ItemList;










