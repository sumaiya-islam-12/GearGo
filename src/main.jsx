import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
<<<<<<< HEAD
import Blog from './Pages/Blog/Blog.jsx';


=======
import AboutUs from './Pages/About-Us/AboutUs.jsx';
>>>>>>> cb15b26dd8a01a35ea3f42e44ced4dfc26c1b1fe

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
<<<<<<< HEAD
    path: '/blog',
    element: <Blog/>
  },

  
=======
    path: '/aboutUs',
    element: <AboutUs/>
  }
  // {
  //   path: '/',
  //   element: 
  // }
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
>>>>>>> cb15b26dd8a01a35ea3f42e44ced4dfc26c1b1fe
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
