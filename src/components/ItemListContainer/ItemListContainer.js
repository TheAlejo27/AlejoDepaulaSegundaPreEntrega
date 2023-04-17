import  {useState, useEffect } from 'react'
import { getProductsByCategory, getProducts } from '../../services/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) =>{
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
  

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
            console.log(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [categoryId]);
console.log(ItemListContainer);
  return (
   <div>
     <h1>{categoryId}</h1>
     <ItemList {...{ products }} />
   </div>
  )
}
console.log(ItemList);
export default ItemListContainer