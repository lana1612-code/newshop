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
      <div className='row'>
        {data?.length ? data?.map(
            (product)=>
            <div key={product._id} className='col-lg-4'>
           <Link className='text-decoration-none text-dark' to={`/products/${product._id}`}>
            <div className=' mb-4 text-center'>
            
                
                
                <div className='mb-4 border border-dark'>
                  <img src={product.mainImage.secure_url } />
                  </div>
            
                  <h6>{product.name}</h6>
          
            </div>
            </Link>
     
             </div>
        ):<p>No Product found</p>}
    </div>
    </div>
    </div>
    </>
  )
}
