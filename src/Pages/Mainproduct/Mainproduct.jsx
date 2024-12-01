import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import {faHeart} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Mainproduct.css'

export default function Mainproduct() {
   
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [specificData, setSpecificData] = useState({});
  
    useEffect(() =>{
      fetch('/public/product/Product.json')
      .then(res => res.json())
      .then(data => setDetails(data)
      )
  });

  useEffect(() => {
      if(details.length > 0){
          const matchedData = details.find((detail) => detail.id == id)
          setSpecificData(matchedData)
      }
  }, [details]);
  
  


  return (
    <div>
        <Header/>
        <div className="container">
      <div className="img">
      <div className='gellary'>
        <div className='gellary-1'>
          
        <img src='/src/assets/Main-product-page-image/small-product.png' alt="" />
        </div>
        <div  className='gellary-1'>
        <img src='/src/assets/Main-product-page-image/small-product.png'  alt="" />
        </div>
        <div className='gellary-1'>
        <img src='/src/assets/Main-product-page-image/small-product.png'  alt="" />  
          </div> 
          <div>
          <img src='/src/assets/Main-product-page-image/Youtube-pic.png' alt="" className="yt"/>
          </div>
        </div>
        <div className='gellary-2'>
        <img src='/src/assets/Main-product-page-image/showing-big-product.png' alt="" />
        </div>
        <div className='gellary-3'>
          <h3>{specificData.title}</h3>
         <div className='car'>
         <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Scooter</button></div>
         <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Car</button></div>
         <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Bike</button></div>
         <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Truck</button></div>
         </div>
         <div className='review'>
         <div>< button className='reviews'>4.5<FontAwesomeIcon icon={faHeart} className='bike' /></button></div>
         <div><h5>{specificData.review} Reviews</h5></div>
         </div>
         <div><p>Extra ₹3690 discount</p></div>
         <div><h5>Deal Price : {specificData.offerprize}  54% off</h5></div>
         <div><p>Regular Price : ₹6880</p></div>
         <div>
          <div><h6>M.R.P :{specificData.mrp}  *Inclusive of all taxes</h6></div>
          <div><h5>Choose SIM Operator</h5></div>
          <div className='sim'>
          <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Airtel</button></div>
          <div>< button className='biker'><FontAwesomeIcon icon={faHeart} className='bike' />Vodafone</button></div>
          </div>
          <div><h5>Available offers</h5></div>
          <div className='offer'>
            <div><FontAwesomeIcon icon={faHeart} className='bike' /></div>
            <div><p>Free Delivery</p></div>
          </div>
          <div className='offer'>
          <div><FontAwesomeIcon icon={faHeart} className='bike' /></div>
          <div><p>Get Flat 200 off on shopping of 6,000 or more</p></div>
          </div>
          <div>
            <button className='pin'>Enter pincode </button>
          </div>
         </div>
         
        </div>
      </div>
    </div>
        <div className="container">
       <div className='flex'>
        <div>
        <div className="add-to">
          <div><button ><FontAwesomeIcon icon={faHeart} className='' />Add to cart</button></div>
          <div><button>Buy Now</button></div>
        </div>
        <div className='sale'><button><p>Sale Ends in <span>0d: 10h: 18m:9s</span></p></button></div>
       
        <h5> Choose Variant</h5>
        <div className='cardd'>
          <div >
            <h5>₹ 3190</h5>
            <p>with 1 year Subscription</p>
            <p>₹ 3190 per year</p>

          </div>
          <div >
            <h5>₹ 3190</h5>
            <p>with 1 year Subscription</p>
            <p>₹ 3190 per year</p>

          </div>
          <div >
            <h5>₹ 3190</h5>
            <p>with 1 year Subscription</p>
            <p>₹ 3190 per year</p>

          </div>
        </div>
        <div className="rating">
        <div >
          <span className="rating-score">4.5</span>
          <span>⭐</span>
        </div>
        <div>
        <button className="reviews">Rate Product</button>
        </div>
        </div>
          <div  className="rating" >
          <h3 className="review-score">
          <span>⭐ 4.5</span> Excellent
        </h3>
        </div>
         <div>
         <p>This is a very good quality product, the build quality <br />
          is great and anyone can install it on his own. The tracking is <br />
          very accurate and quick. The app is very professionally made <br />
           and give all the insights one can get from GPS. I recommended <br />
            it to everyone.</p>
         </div>
          
        <h5>Danial Trudo</h5>
        <div className='addd'>
          <div>
          <button >See More</button>
          </div>
        </div>
       
        </div>
        <div className='services'>
          <div>
          <h5>Services</h5>
          </div>
          <div>
          <div style={{ marginBottom: '20px' }}>
        <h2>Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>✔ 1 Year of hardware warranty, T&C</li>
          <li>✔ 20 days easy return policy</li>
          <li>✔ Quick delivery available at major cities</li>
        </ul>
      </div>
        <h5>Product Features</h5>
       <div className='features'>
       <div>
            <h5>Heat Resistance</h5>
            <p>Can Work In High Range Of Temperatures: -20°C To +70°C</p>
          </div>
          <div>
            <h5>Ignition Detection</h5>
            <p>Be Aware Of The Ignition Status Wherever You Are</p>
          </div>
       </div>
       <h5>Questions and Answers</h5>
       <div className='Q&A'>
          <p>Q: What is the range?</p>
          <p>A:You can monitor your vehicles from anywhere in India using our application</p>
          <p>Q: What is the range?</p>
          <p>A:You can monitor your vehicles from anywhere in India using our application</p>
       </div>
       <div className='addd'>
          <div>
          <button >See More</button>
          </div>
        </div>
        <div>
          <h5>Specifications</h5>
          <p>GSM Specification</p>
        </div>
        <div className='communication'>
          <div><p>Communication System</p>
          </div>
          <div><p>GSM</p></div>
        </div>
        <div className="communication">
          <div>
            <div>Band</div>
          </div>
          <div>
            <p>850/900/1800/1900MHz</p>
          </div>
        </div>
        <div className="communication">
          <div>
            <div>GPRS</div>
          </div>
          <div>
            <p>GPRS</p>
          </div>
        </div>
        <div className="communication">
          <div>
            <div>Maximum Output Power</div>
          </div>
          <div>
            <p>GSM850/GSM900：32.5±2dBm, GSM1800/GSM1900:30±2dBm
            </p>
          </div>
        </div>
        <div className="communication">
          <div>
            <div>Receiving Sensitivity
            </div>
          </div>
          <div>
            <p>ClassII RBER2%(-103dBm)</p>
          </div>
        </div>
        <div className="communication">
          <div>
            <div>Communication Antenna

            </div>
          </div>
          <div>
            <p>Built-in FPC Antenna 49.04*6.11*0.12(±0.2MM)</p>
          </div>
        </div>
        <div className='addd'>
          <div>
          <button >See More</button>
          </div>
        </div>
          </div>
        </div>

       </div>
          <div className='client'>
            <h1>
              -Why our clients love Us?-
            </h1>
            <img src="/src/assets/Main-product-page-image/client.png" alt="" />
            <p>Onelap has made fleet management easy.It has helped me in monitoring my vehicle even from home. It is a must <br />
             buy product for every fleet owner
            </p>
            <h1>-Media Coverage-</h1>
            <div>
              <img src="/src/assets/Main-product-page-image/media-1.png" alt="" />
              <img src="/src/assets/Main-product-page-image/media-2.png" alt="" />
              <img src="/src/assets/Main-product-page-image/media-3.png" alt="" />
              <img src="/src/assets/Main-product-page-image/media-4.png" alt="" />
              <img src="/src/assets/Main-product-page-image/media-5.png" alt="" />
              <img src="/src/assets/Main-product-page-image/media-6.png" alt="" />
            </div>
            <h1>-Best Sellers-</h1>
            imgslider
            
          </div>
          <div>
            <h1 className='get'>
            -Get started-
            </h1>
            <div className="started">
              <div>
              <img src="/src/assets/Main-product-page-image/map.png" alt="" />
              </div>
              <div>
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
                        
                        <div>
                              <button className="btn-wrapper">Send</button>
                        </div>
                      </form> 
                </div>
              </div>
            </div>
          </div>


        </div>
       <Footer/>
    </div>
  )
}
