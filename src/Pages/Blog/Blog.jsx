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
          <div className='headings'>
            <p>-Blog-</p>
          </div>
          <div className='blog-area'>
            {
              blog.map(blogs => <Keya blogdata = {blogs}/>)
            }
          </div>
          
        <div className='pagination'>
          
            <a href="">&lt;</a>
            <a href="" className='active'>1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">10</a>
            <a href="">&gt;</a>
          

        </div>
        </div>
       

      <Footer/>
           
    </div>
  )
}
