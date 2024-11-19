import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
import Blog from './Pages/Blog/Blog.jsx';


=======
import AboutUs from './Pages/About-Us/AboutUs.jsx';
>>>>>>> cb15b26dd8a01a35ea3f42e44ced4dfc26c1b1fe
=======
import Mainproduct from './Pages/Mainproduct/Mainproduct.jsx';
import AboutUs from './Pages/About-Us/AboutUs.jsx';
import Policy from './Policy/Policy.jsx';
import Pyment from './Pages/Pyment/Pyment.jsx';
>>>>>>> 752aceff2b57c9cad4e696497ee9e75b2b3f942a

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: '/blog',
    element: <Blog/>
  },

  
=======
    path: '/aboutUs',
=======
    path: '/mainproduct',
    element: <Mainproduct/>
    
  },
  {
    path: '/aboutus',
>>>>>>> 752aceff2b57c9cad4e696497ee9e75b2b3f942a
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
<<<<<<< HEAD
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
=======
>>>>>>> 752aceff2b57c9cad4e696497ee9e75b2b3f942a
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
