import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {useQuery} from 'react-query';
import axios from 'axios';
import { CartContext } from '../../context/Context';

export default function Product() {
     const {productsID} = useParams();
     const Values={
      comment:'',
      rating:'',
     }
     const getProductDeatail = async()=>{
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/products/${productsID}`);
        return data;
     }

     const {data,isLoading} = useQuery('get_Product_Detail',getProductDeatail);
     const  {addToCartContext,loadingR ,addReviews } = useContext(CartContext);

     const addToCart =async(id)=>{
      const response = await addToCartContext(id);
      
     }

     const addReview = async ()=>{
      Values.comment = document.getElementById('comment').value;
      Values.rating= document.getElementById('rate').value;
      const rev = await  addReviews( productsID,Values);
      console.log(rev);
      return rev
     }


     if(isLoading){
        return <h2> Loading </h2>;
     }
     if(loadingR){
      return <div > Loading</div>
     }
  return (
    
    <>
    <div className="container mt-5">
        <div className='row  mt-5 border p-5'>
            <div className='col-lg-6'>
           <div className='row' >
        {data?.product.subImages.map(
            (img)=>
            <div className=' col-lg-4 '>
              <div className=' border border-primary mb-3'>
              <img src={img.secure_url} className='img-fluid w-100' />
              </div>
            </div>
        )}
        
          </div>   
    </div>
    
    <div className='col-lg-6 ps-5'>
        <h5> name product : {data.product.name}</h5>   
        <p>price : {data.product.price} </p>
        <p className='text-info'> avg rating : {data.avgRating}</p>
        <button class='btn btn-outline-dark mb-3' onClick={()=>addToCart(data.product._id)} >add to cart</button>


{
 data?.product.reviews.map(
  (review)=>
  <div className=' mb-3 d-flex flex-row border border-dark rounded p-3'>
    <span>{review.createdBy.userName} : </span>
    <span className='   ms-2'>{review.comment}</span>
  </div>
)}



       
      

      <div className=' mb-3 '>
        <span >comment : </span>
      <input type="text" id="comment" name="comment"  /> <br></br>

      <span className='my-3'>rate : </span>
      <input type="text" id="rate" name="rate" className='my-3'  /> <br></br>

      <button onClick={()=>addReview()} className='btn btn-success ms-2'>Add review</button>
      </div>
    </div>

    </div>
    </div>
    </>
  )
}
