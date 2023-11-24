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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
