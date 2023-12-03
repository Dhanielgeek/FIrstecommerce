import React from 'react'
import Home from './Pages/Home'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import Details from './Pages/Details';
import Categories from './Pages/Categories';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/category',
        element:<Category/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/details/:id',
        element:<Details/>
      },
      {
        path:'/details',
        element:<Details/>
      },
      {
        path:"/categories/:id",
        element:<Categories/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App