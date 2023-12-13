import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/User';

export default function UserInfo() {
  const {userData ,Loading} = useContext(UserContext);

  return (
   <>
    <div className='infoUser mt-5 pt-5'>
    <h3>user name  :  {userData?.userName}</h3>
  <div className='w-50'>
  <img src={userData?.image.secure_url} className='w-50' alt="Profile"/>
  </div>
  </div>
   </>

  )
}


/*
  

 
*/
