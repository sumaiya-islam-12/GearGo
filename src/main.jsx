import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Mainproduct from './Pages/Mainproduct/Mainproduct.jsx';
import Pyment from './Pages/Pyment/Pyment.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import AboutUs from './Pages/About-Us/AboutUs.jsx';
import AllProduct from './Pages/AllProduct/AllProduct.jsx';
import Policy from './Pages/Policy/policy.jsx';
import Bike from './Pages/Bike/Bike.jsx';

import Download from './Pages/Download/download.jsx';
import Car from './pages/Car-takia/car.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/blog',
    element: <Blog/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/allproduct',
    element: <AllProduct/>
    
  },
  {
    path: '/mainproduct/:id',
    element: <Mainproduct/>
    
  },
  {
    path: '/car',
    element: <Car/>
    
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  },
  {
    path: '/policy',
    element: <Policy/>
  },
  {
    path: '/bike',
    element: <Bike/>
  },
  {
    path: '/pyment',
    element: <Pyment/>
  },
  {
    path: '/download',
    element: <Download/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
