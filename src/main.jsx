import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Mainproduct from './Pages/Mainproduct/Mainproduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/mainproduct',
    element: <Mainproduct/>
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
