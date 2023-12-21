import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Context';
import { useQuery } from 'react-query';

export default function UserOrder() {
  //getOrder
  const {getOrder ,loadingOrder} = useContext(CartContext);

  const order = async ()=>{
    const d =await getOrder();
    
    return d.orders    ;
  }
  
     let {data} = useQuery("order",order);
     console.log("order");
     console.log(data);

if(loadingOrder){
  return <div>is loading</div>
}
 return (
<>

{data?.map(
  (order1 , key)=>
  <>
  <h2 className='mt-5'>Order {key}</h2>
<table class="table  table-danger">
  <thead>
    <tr className='text-center'>
      <th scope="col">status</th>
      <th scope="col">created At</th>
      <th scope="col">updated At</th>
      <th scope="col"> number products</th>
      <th scope="col">final Price</th>
      <th scope="col">address </th>
      <th scope="col"> phone Number
</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='p-2'>{order1.status}</td>
      <td className='p-2'>{order1.createdAt}</td>
      <td className='p-2'>{order1.updatedAt}</td>
      <td className='p-2 text-center'>{order1.products.length}</td>
      <td className='p-2 text-center'>{order1.finalPrice}</td>
      <td className='p-2 text-center'>{order1.address}</td>
      <td className='p-2 text-center'>{order1.phoneNumber} </td>


    </tr>
    
   
  </tbody>
</table>
</>
)}



</>


    )
}
