import React, { useContext } from 'react'
import { UserContext } from '../../context/User';

export default function UserContact() {
  const {userData ,Loading} = useContext(UserContext);
  const {address,phone} = useContext(UserContext);

console.log(userData);
  return (
    <div className='contact  mt-5 pt-5'>
    <h3 className=' border-bottom  border-dark pb-3 ps-2 pe-5 mb-4'> email  :  {userData?.email} </h3>
    <h3 className=' border-bottom  border-dark pb-3 ps-2 pe-5 mb-4'> phone  :  {phone} </h3>
    <h3 className=' border-bottom  border-dark pb-3 ps-2 pe-5 mb-4'> address  :  {address} </h3>
    </div>
  )
}
