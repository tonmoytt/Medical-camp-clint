import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './AllComponent/Root/Root';
import Home from './AllComponent/Root/Home/Home';
import Contact from './AllComponent/Root/Home/Header/Contact/Contact';
import Authinction from './AllComponent/Root/Authinction/Authinction';
import SignUp from './AllComponent/Root/Authinction/SignUp/SignUp';
import Login from './AllComponent/Root/Authinction/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<Login></Login> 
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinction>
      <RouterProvider router={router} />
    </Authinction>
  </React.StrictMode>,
)
