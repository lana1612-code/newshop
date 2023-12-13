import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/Context';

export default function UserOrder() {
  //getOrder
  const {getOrder ,loadingOrder} = useContext(CartContext);
if(loadingOrder){
  return <div>is loading</div>
}
  return (
    <div>UserOrder</div>
  )
}
