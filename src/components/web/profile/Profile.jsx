import React, { useContext } from 'react'
import { UserContext } from './../../context/User.jsx';

export default function Profile() {
  const {userData} = useContext(UserContext);

  return (
    <div className='container'>
    <table className="table m-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">email</th>
      <td>{userData?.email}</td>
    </tr>
    <tr>
      <th scope="row">user Name</th>
      <td>{userData?.userName}</td>
    </tr>
    <tr>
      <th scope="row">role</th>
      <td>{userData?.role}</td>
    </tr>
  </tbody>
</table>
</div>
  )
}
