import { useEffect, useState } from 'react';
import Keya from '../../Components/Blogkeya/keya';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Blog.css';


export default function Blog(){
  const [blog , setBlog] = useState ([]);
  useEffect(() => {
    fetch('/public/Blog.json')
    .then(res => res.json())
    .then(data =>setBlog(data))
  }

  )
  
  
  return (
    <div>
        <Header/>
        <div className='container'>
          <div className='heading'>
            <p>-Blog-</p>
          </div>
          <div className='blog-area'>
            {
              blog.map(blogs => <Keya blogdata = {blogs}/>)
            }
          </div>
          
        <div>
        
        </div>
        </div>

      <Footer/>
    </div>
  )
}
