import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {createContext} from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);


export function CartContextProvider ({children}){
    let [count,setCount] = useState(0);
    let [loading,isLoading] = useState(true);
    let [loadingOrder,isLoadingOrder] = useState(true);
    const [Total, setTotal] = useState(1);
    let [loadingQ,isLoadingQ] = useState(true);
    let [loadingO,isLoadingO] = useState(false);
    let [loadingR,isLoadingR] = useState(false);

    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');

    
  
  const getCartContext = async ()=>{
    try{
       const token = localStorage.getItem('userToken');
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/cart`
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
        setCount(data.count);
        console.log(data.count);
       
        return data;
    }
    catch(err){
        console.log(err);
    }
  }
  const addToCartContext  = async (productId)=>{

    try{
       console.log(productId);
       const token = localStorage.getItem('userToken');
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/cart`
        ,{productId}
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
        toast.success('add to cart  success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            getCartContext();
      return data;

    }catch(error){
        console.log(error);
    }


   }
  const removeCartContext = async (productId)=>{
    try{
        const token = localStorage.getItem('userToken');
        isLoading(true);
         const {data} = await axios.patch(`https://ecommerce-node4.vercel.app/cart/removeItem`
         ,{productId},{headers:{Authorization:`Tariq__${token}`}}
         );
         toast.success('remove from cart  success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

            isLoading(fasle);
         return data;
     }
     catch(err){
         console.log(err);
     }
  }
  const clearCartContext = async ()=>{
    try{
        const token = localStorage.getItem('userToken');
        console.log(token);
        console.log("1");

         await axios.patch(`https://ecommerce-node4.vercel.app/cart/clear`
         ,null ,{headers:{Authorization:`Tariq__${token}`}},
         );
         toast.success('clear cart  success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            isLoading(false)
          console.log("data1");
          

       
     }
     catch(err){
         console.log(err);
     }
  }
  const increase = async (productId)=>{
    try{
       
        const token = localStorage.getItem('userToken');
        await axios.patch(`https://ecommerce-node4.vercel.app/cart/incraseQuantity`
        ,{productId} ,{headers:{Authorization:`Tariq__${token}`}}
         );
         isLoadingQ(false);
     }
     catch(err){
         console.log(err);
     }
  }
  const decrease= async (productId)=>{
    try{
     
        const token = localStorage.getItem('userToken');
        await axios.patch(`https://ecommerce-node4.vercel.app/cart/decraseQuantity`
        ,{productId} ,{headers:{Authorization:`Tariq__${token}`}}
         );
         isLoadingQ(false);
     }
     catch(err){
         console.log(err);
     }
  }
  const getOrder = async ()=>{
    try{
        
        const token = localStorage.getItem('userToken');
        const {data} =    await axios.get(`https://ecommerce-node4.vercel.app/order`
      ,{headers:{Authorization:`Tariq__${token}`}}
         );
         console.log(token);
         isLoadingOrder(false);
         return data;
    }
     catch(err){
         console.log(err);
     }
  }
  const getAllProduct= async ()=>{
    try{
        
        const {data} =   await axios.get(`https://ecommerce-node4.vercel.app/products?page=1&limit=10`
   
         );     
         return data;
     }
     catch(err){
         console.log(err);
     }
  }
  const createOrder  = async users=>{

    try{
        isLoadingO(true);

       const token = localStorage.getItem('userToken');
       const {data} =  await axios.post("https://ecommerce-node4.vercel.app/order",users,
       {headers:{Authorization:`Tariq__${token}`}},
        );
        isLoadingO(false);

        toast.success('create order success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            console.log(data);
   return data;

    }catch(error){
        console.log(error);
    }


   }
 
  const addReviews = async (productsID, Values)=>{
    try{
        isLoadingR(true);
        const token = localStorage.getItem('userToken');
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/products/${productsID}/review`
        ,Values ,{headers:{Authorization:`Tariq__${token}`}}
         );
         isLoadingR(false);
        
         return data;
     }
     catch(err){
         console.log(err);
     }
  }


    return <CartContext.Provider value = {{addToCartContext,loadingR,setRate,setComment,addReviews,loadingO,getAllProduct,createOrder,loadingQ,Total, setTotal,loadingOrder,getOrder,decrease,increase,loading,getCartContext,removeCartContext,clearCartContext,count}}>
    {children}
    </CartContext.Provider>
}