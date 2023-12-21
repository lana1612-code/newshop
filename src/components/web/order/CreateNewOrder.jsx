import React, { useContext } from 'react'
import Inputs from '../../shared/Inputs.jsx';
import {  useFormik } from 'formik';
import {validationSchemaOrder} from '../../shared/Valid.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../context/Context.jsx';
import { UserContext } from '../../context/User.jsx';
import { useQuery } from 'react-query';

export default function CreateNewOrder() {
   const initialValues={
      phone:'',
      address:'',
      couponName: ''
     }
     const {getCartContext,createOrder,loadingO} =useContext(CartContext);
     const {setAddress, setPhone} = useContext(UserContext);
        
     const getCart = async()=>{
        const response = await getCartContext();
        return response;
    }
    
    const createOrder1 = async(f)=>{
      const response = await createOrder(f);
        console.log(response);
        return response;
    }
      const {data,isLoading} = useQuery("getCart",getCart);
     
   
     const onSubmit= async ()=>{
     setPhone(formik.values.phone);
     setAddress(formik.values.address);
     createOrder1(formik.values );
     } 

    const formik= useFormik(
     { 
      initialValues,
     onSubmit,
     validationSchema: validationSchemaOrder,
    })


    const input = [
    {
      id:'phone',
      name:'phone',
      type:'text',
      title:'user phone',
      value:formik.values.phone,
      

   },{
      id:'address',
      name:'address',
      type:'text',
      title:'user address',
      value:formik.values.address,
   },{
    id:'couponName',
    name:'couponName',
    type:'text',
    title:'coupon Name',
    value:formik.values.couponName,
 }
    ];

    const inputs = input.map(
        (inp,index)=>
         < Inputs 
          onBlur={formik.handleBlur} 
          touched={formik.touched} 
          error={formik.errors} 
          onChange={inp.onChange || formik.handleChange}  
          key={index} 
          title={inp.title} 
          id={inp.id} 
          name={inp.name} 
          type={inp.type} 
          value={inp.value} />
    );
if(loadingO){
return <>loading</>
}
  return (
    <>

<div className="container">
<div className="ps-5   mt-3 "><h4><u>Your Order</u></h4></div>

<div className="row"> 
{data?.products?(data?.products.map(
            (product)=>
            <div className='col-lg-3 ' key={product.details._id}> 
            <div className=" my-3 ">
              <div className='border border-dark' > 
              <img src={product.details.mainImage.secure_url}  />
              </div>
            <div className=" product-info ps-3 mt-2">
             
              <h6>name  :{product.details.name}</h6>
            
            <h6>Quantity : {product.quantity}</h6>
            <h6 className="price">price : {product.details.price}</h6>
            <h6 className="subtotal"> Total : {product.details.price *product.quantity }</h6>
            </div>
          </div> 
          </div> 
           )):"no product found"}
</div>

 <div className='d-flex  justify-content-center'>
    <div className='  border rounded-5 w-50 mt-5 p-5 border-3 border-dark'>
         <h4 className='mb-3 '>Create Order</h4>
        <form onSubmit={formik.handleSubmit} >
         {inputs}
         <button type='submit' class='btn btn-warning rounded-4' disabled={!formik.isValid} >
         Create
         </button>
         </form>
    </div>
 </div>

 </div>
    </>
  )
}

