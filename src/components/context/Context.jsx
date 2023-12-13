import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {createContext} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);


export function CartContextProvider ({children}){
    let [count,setCount] = useState(0);
    let [loading,isLoading] = useState(true);
    let [loadingOrder,isLoadingOrder] = useState(true);
    const [Total, setTotal] = useState(1);

  
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
        
     }
     catch(err){
         console.log(err);
     }
  }
  const getOrder = async ()=>{
    try{
        const token = localStorage.getItem('userToken');
        await axios.get(`https://ecommerce-node4.vercel.app/order`
      ,{headers:{Authorization:`Tariq__${token}`}}
         );
         console.log(token);
         isLoadingOrder(false);
        
     }
     catch(err){
         console.log(err);
     }
  }
  

    return <CartContext.Provider value = {{addToCartContext,Total, setTotal,loadingOrder,getOrder,decrease,increase,loading,getCartContext,removeCartContext,clearCartContext,count}}>
    {children}
    </CartContext.Provider>
}
/*
 
*/