import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useQuery} from 'react-query';
import axios from 'axios';

export default function CatogoryDetail() {
     const {catogoryID} = useParams();

     const getCatogoryDeatail = async()=>{
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/products/category/${catogoryID}`);
        return data.products;
     }

     const {data,isLoading} = useQuery('get_Categories_Detail',getCatogoryDeatail);
     console.log(data);
     if(isLoading){
        return <h2> Loading </h2>;
     }
  return (
    
    <>
    <div className="container  mt-4">
      <div className='container ' >
        {data?.length ? data?.map(
            (product)=>
            <div key={product._id}>
           <Link to={`/products/${product._id}`}>
               <div class= 'row  p-5 mb-4 border '>
                <h2>{product.name}</h2>
                <div class='w-50 mt-3 '>
                  <img src={product.mainImage.secure_url } />
                
            
            </div>
            </div>
            </Link>
     
             </div>
        ):<p>No Product found</p>}
    </div>
    </div>
    </>
  )
}
