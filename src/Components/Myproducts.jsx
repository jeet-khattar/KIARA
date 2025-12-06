import { List } from "lucide-react";
import React, { useEffect, useState } from "react";

const Myproducts = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((jeet) => setfirst(jeet))
  }, []);
  return (
    <>
      <ul>
        {first.map((Lists)=>(
            <li key={Lists.id}>{Lists.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Myproducts;
