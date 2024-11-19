import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Blog from './Pages/Blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/blog',
    element: <Blog/>
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
