import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import AboutUs from './Pages/About-Us/AboutUs.jsx';
import Cart from './Pages/cart/cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/aboutUs',
    element: <AboutUs/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  // {
  //   path: '/',
  //   element: <Home/>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
