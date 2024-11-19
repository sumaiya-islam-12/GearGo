import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Mainproduct from './Pages/Mainproduct/Mainproduct.jsx';
import AboutUs from './Pages/About-Us/AboutUs.jsx';
import Policy from './Policy/Policy.jsx';
import Pyment from './Pages/Pyment/Pyment.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/mainproduct',
    element: <Mainproduct/>
    
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
    path: '/pyment',
    element: <Pyment/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
