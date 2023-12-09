import Layout from './../../layouts/Layout.jsx';
import DashboardLayout from './../../layouts/DashboardLayout.jsx';
import Catogory from './../../components/web/catogories/Catogory.jsx';
import Home from './../../components/web/home/Home.jsx';
import HomeDashboard from './../../components/dashboard/home/Home.jsx'
import CatogoryDashboard from './../../components/dashboard/catogories/Catogory.jsx'
import Register from './../../components/web/register/Register.jsx';
import {createBrowserRouter} from "react-router-dom";
import Login from '../web/login/Login.jsx';
import Cart from '../web/cart/Cart.jsx';
import CatogoryDetail from '../web/catogories/CatogoryDetail.jsx';
import Product from '../web/product/Product.jsx';
import EmailForgetPassword from '../web/forgetpassword/EmailForgetPassword.jsx';
import ForgetPassword from '../web/forgetpassword/ForgetPassword.jsx';
import ProtectRouter from './ProtectRouter.jsx';
import Profile from '../web/profile/Profile.jsx';
import Auth from './Auth.jsx';

 export const  Route= createBrowserRouter([
    {
    path:'/',
    element:<Layout  />,
    children:[
      {
      path:'/',
      element:<Home/>
      },
      {path:'catogory',
      element:<Catogory/>
      },{
        path:'register',
        element:<Register/>
      },{
        path:'profile',
        element:<Profile/>
      },{
        path:'cart',
        element:
        <ProtectRouter>
        <Cart/>
        </ProtectRouter>
      },{
        path:'login',
        element:
          <Login/>
      },{
        path:'products/category/:catogoryID',
        element:<CatogoryDetail />
      },{
        path:'products/:productsID',
        element:<Product />
      },{
        path:'auth/sendcode',
        element:<EmailForgetPassword />
      },{
        path:'auth/forgotPassword',
        element:<ForgetPassword />
      },{
        path:'*',
        element:<div>not found web</div>
      }
      
    ]
    },
    {
      path:'/dashboard',
    //  element:<DashboardLayout/>,
      children:[
        {path:'homeDashboard',
     //   element:<HomeDashboard/>
        },
        {path:'catogoryDashboard',
      //  element:<CatogoryDashboard/>
        },{
          path:'*',
          element:<div>not found dashboard</div>
        }
      ]
    }
    ]);//containe array of object
