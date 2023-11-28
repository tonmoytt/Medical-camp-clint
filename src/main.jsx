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
import AvailableCamp from './AllComponent/Root/Navbar/Navbar/AvailableCamp/AvailableCamp';
import PrivetRoute from './AllComponent/Root/Authinction/PrivetRoute/PrivetRoute';
import Priticipant from './AllComponent/Root/Navbar/Navbar/AvailableCamp/Priticipant/Priticipant';
import AboutUs from './AllComponent/Root/Navbar/Navbar/AboutUs/AboutUs';
import Dashboard from './AllComponent/Root/Navbar/Navbar/Dashboard/Dashboard';
import AddCamp from './AllComponent/Root/Navbar/Navbar/Dashboard/AddCamp/AddCamp';
import Detials from './AllComponent/Root/Navbar/Navbar/AvailableCamp/DEtials/Detials';
import ManageRequest from './AllComponent/Root/Navbar/Navbar/Dashboard/ManageRequest/ManageRequest';
import DeleteData from './AllComponent/Root/Navbar/Navbar/Dashboard/ManageRequest/DeleteData/DeleteData';
import MangeCamp from './AllComponent/Root/Navbar/Navbar/Dashboard/MangeCamp/MangeCamp';
import Update from './AllComponent/Root/Navbar/Navbar/Dashboard/MangeCamp/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      // Navbar//
      {
        path: '/camp',
        element: <PrivetRoute><AvailableCamp></AvailableCamp></PrivetRoute>
      },
      {
        path: '/participant',
        element: <Priticipant></Priticipant>
      },
      // dashboard//
      {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute> 
      },
      {
        path: '/addcamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: '/managecamp',
        element: <MangeCamp></MangeCamp>
      },
      {
        path: '/request',
        element: <ManageRequest></ManageRequest>
      },
      {
        path: '/details/:id',
        element: <PrivetRoute><Detials></Detials></PrivetRoute> ,
        loader: () => fetch('http://localhost:5000/post')

      },
      {
        path: '/update/:id',
        element:  <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/join/${params.id}`)

      },
      // {
      //   path: '/delete/:id',
      //   element:<DeleteData></DeleteData>,
      //   loader: () => fetch('http://localhost:5000/add')

      // },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      // authonction
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

      // Footer//

      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Authinction>
      <div className='text-white bg-slate-900 rounded-xl m-2'>
      <RouterProvider router={router} />
      </div>
     
    </Authinction>
  </React.StrictMode>,
)
