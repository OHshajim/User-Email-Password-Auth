import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root.jsx';
import Home from './assets/Components/Home/Home.jsx';
import Signup from './assets/Components/SIgnup/Signup.jsx';
import Login from './assets/Components/Login/Login.jsx';
import HeroRegisterForm from './assets/Components/HeroForm/HeroRegisterForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> , 
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/SignUp",
        element:<Signup/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/HeroRegister",
        element:<HeroRegisterForm/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
