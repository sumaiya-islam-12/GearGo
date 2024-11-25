import './Details.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useEffect, useState } from 'react';
import Almin from '../../Components/Detailskeya/Almin';



export default function Details() {

  
        const [blog , setBlog] = useState ([]);
        useEffect(() => {
          fetch('/public/Details.json')
          .then(res => res.json())
          .then(data =>setBlog(data))
        }
    )




  return (
    <div>

       
            <Header/>
            <div className='container' >
            <div>
        {
              blog.map(blogs => <Almin blogdata = {blogs}/>)
            }
        </div>

                  <div className="btn-wrapper2">
                              <button>See More </button>
                        </div> 

                     

                <div className='container'>
                      <form action="">
                        <div className="input-wrap">
                            <input type="text" placeholder="Your Name *"></input>
                            <input type="email" placeholder="Your E-mail *"></input>
                        
                        </div>
                        <div className="input-wrap-2">
                            <input type="text" placeholder="Your Subject..."></input>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Massage..."></textarea>
                        </div>
                        <div className="btn-wrapper">
                              <button>Send </button>
                        </div>
                      </form> 
                  </div>
                </div>
                <Footer/>
            
    </div>
  )
}
