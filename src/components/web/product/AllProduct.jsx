import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Context';
import { useQuery } from 'react-query';

export default function AllProduct() {
     const {getAllProduct} =useContext(CartContext);
     const productsAll = async ()=>{
       const data1 = await getAllProduct();
       return data1
     }
        let {data} = useQuery("productsAll",productsAll);
        console.log("all product");
        
        data = data?.products;
        console.log(data);

  return (
     <>
         <div className="container text-center">
          <div className='row'>

         
          {data?.map(
            (product)=>
            <div key={product._id}className=' col-lg-3 my-3 py-4  '>
              <div className='rounded border border-dark '>
              <div className=''>
               <img src={product.mainImage.secure_url} className='border border-dark' />
              </div>
              <div className='pt-3 '>
              <h6>{product.name}</h6>
              <p>price : {product.price}</p>
              <p>status : {product.status}</p>
              </div>
              </div>
            </div>
          )}
         </div>
         </div>
     </>
  )
}
/*
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

*/