import React, { useContext } from 'react'
import { UserContext } from '../../context/User';

export default function UserContact() {
  const {userData ,Loading} = useContext(UserContext);
console.log(userData);
  return (
    <div className='contact  mt-5 pt-5'>
    <h3> email  :  {userData.email} </h3>
    <h3> phone  :  {userData.phone} </h3>
    <h3> address  :  {userData.address} </h3>
    </div>
  )
}
/*


*/