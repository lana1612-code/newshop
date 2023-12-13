import React, { useContext } from 'react'
import { UserContext } from './../../context/User.jsx';
import  './ProfileStyel.css'
import { Link, Outlet } from 'react-router-dom';
export default function Profile() {
  const {userData ,Loading} = useContext(UserContext);
  
 if(Loading)
 {
  return <div>loading</div>
 }
  return (
    <aside className='profile  '>
     <div className='p-5 navClass'>
      <nav className='d-flex flex-column p-5'>
        <Link to='info' className='mb-4 link-underline link-underline-opacity-0 text-dark  '>information</Link>
        <Link to='contact' className='mb-4 link-underline link-underline-opacity-0 text-dark '>contact</Link>
        <Link to='order' className='link-underline link-underline-opacity-0 text-dark '>order</Link>
      
      </nav>
     </div>

<div className=''> 

<Outlet />
</div>
     



    </aside>
  )
}



/*
    <aside className='profile  '>
     <div className='p-5 navClass'>
      <nav className='d-flex flex-column p-5'>
        <Link to='/info' className='mb-4 link-underline link-underline-opacity-0 text-dark  '>information</Link>
        <Link to="/contact" className='link-underline link-underline-opacity-0 text-dark '>contact</Link>
      </nav>
     </div>

<div className=''> 

<Outlet />
</div>
     



    </aside>



*/

  
/*
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
*/