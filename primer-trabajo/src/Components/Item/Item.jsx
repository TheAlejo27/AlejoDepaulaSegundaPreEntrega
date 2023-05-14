import React from 'react'
import { Link } from 'react-router-dom'

function Item({ productos, onSelect }) {

  function handleSelect() {
    onSelect(productos.id);
  }

  console.log(productos);
  return (
    <div className=" bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
      <img className=" w-full h-[300px]" src={productos.img} alt={productos.name} />
      <div className="px-6 py-4">
        <div className="text-zinc-600 font-bold text-xl mb-2">{productos.name}</div>
        <p className="text-gray-700 font-semibold text-base">{productos.category}</p>
        <p className="text-gray-600 font-medium text-base mb-2 pt-2">${productos.price}</p>
        </div>
      <div className="px-6 pt-0 pb-8  ">
        
        <Link onClick={handleSelect} to={`/item/${productos.id}`} className="  mt-6 bg-cyan-900 hover:bg-cyan-950 rounded-sm text-white font-bold py-2 px-4   focus:outline-none focus:shadow-outline">Ver detalles</Link>
       
      </div>
    </div>
  )
}


export default Item
