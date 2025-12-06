import React, { useEffect, useState } from 'react'

function Product() {
    const [product, setProduct] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setProduct(json))
},[])
  return (
    <div>
        <ul>
            {product.map((item)=>(
                    <li key={item.id}>{item.title}</li>
            ))}
           
        </ul>
    </div>
  )
}

export default Product