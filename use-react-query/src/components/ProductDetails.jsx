import React from 'react'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProduct = async({queryKey}) => {
    const response = await axios.get(`http://localhost:3000/${queryKey[0]}/${queryKey[1]}`);
    return response.data;
}

const ProductDetails = ({id}) => {

 const {data: product, error, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  if (isLoading) return <div>Fetching Product Details...</div>
  if(error) return <div>An Error Occured: {error.message}</div>

  return (
    <div className='w-1/5'>
        <h1 className="text-3xl my-2">Product Details</h1>
        <div className='border bg-gray-100 p-1 text-md rounded flex flex-col'>
            <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover h-24 w-24 border rounded-full m-auto" />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>USD {product.price}</p>
            <p>{product.rating}/5</p>
        </div>
    </div>
  )
}

export default ProductDetails