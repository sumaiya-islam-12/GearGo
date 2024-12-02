import './Details.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';





export default function Details() {
  const {id} = useParams ();
  const [details, setDetails] = useState([]);
  const [specificData, setSpecificData] = useState({});

  useEffect(() =>{
    fetch('/public/Blog.json')
    .then(res => res.json())
    .then(data => setDetails(data)
    )
});

useEffect(() => {
  if(details.length > 0){
      const matchedData = details.find((detail) => detail.id == id)
      setSpecificData(matchedData)
  }
},[details]);


  



  return (
    <div>

       
            <Header/>
            <div className='container' >
   

        <p className='heading'>Why AIS 140 GPS devices (RTO certified) are mandatory?</p>
        <p className='text'>With Trackon GPS app, you can put your mind at ease knowing that no matter where you or your vehicle is, you will always be able to find it. You can also easily manage our powerful tracking functions</p>
        <div  className='picture'>
          <img src={specificData.url} alt="" />
          {/* <img src ="https://i.ibb.co.com/KVB19DB/Rectangle-44.png"alt=""/> */}
        </div>   

        <div className='heads'>
        Components of AIS 140 GPS devices compatible systems:
        <p>Since the entire list of requirements for an AIS 140 is a very vast and comprehensive set of instructions, we can divide the specifications into 5 categories namely,</p>
        </div>

        <p className='count'>
        <li>1. Hardware</li>
        <li>2. Software</li>
        <li>3. Server</li>
        <li>4. Testing</li>
        <li>5. Control unit</li>
        </p> 

        <div className='picture'> 
        <img src="https://i.ibb.co.com/KVB19DB/Rectangle-44.png" alt="" />
        </div> 


        <div className='heading'>
        1. Hardware:
          <div className='faq'>
          <li>.First of all, a MODEM to effectively connect to the system is necessary.</li>
          <li>.Without a MODEM no information can be transmitted to and from the vehicle.</li>
          <li>.Access to GPS satellite services such as GNSS or IRNSS/NAVIC with a minimum accuracy of either 2.5 meters or 6 meters depending on the capability of the device.</li>
          <li>.Battery backup of at least 4 hours(standard) to support normal operations of the vehicle.</li> 
          <li>.Emergency Buttons must be included in the vehicle which sends information such as location details to a specified IP Address or in case there is no GPRS connectivity send an SMS.</li>
          <li>.an embedded SIM is also a suggestion in this protocol.</li> 
          <li>Device must be resistant to dust, temperature, vibration, water splash (with minimum IP 65rating) and tamper-proof.</li>
          </div>
        </div>

        <div className='picture'>
       <img src="https://i.ibb.co.com/b137fwC/Group-216.png" alt="" />
       </div>

       <div className='heading2'>
       The salient features of Onelap’s GPS Tracker are:
       </div>

      <div  className='faqs'>
              <li>1. Firstly, Real-time tracking of your vehicle via an application on your mobile phone.</li>
             <li> 2. Vehicle performance statistics.</li>
             <li> 3. Data History.</li>
             <li> 4.Remte Engine Immobilization at your fingertips accessible from anywhere.</li>
             <li> 5. Define Geofences or Safe zones on the map.</li>
              <li>6. Finally, much more affordable than other GPS tracking solutions in the market.</li>
      </div>

    <div  className='item'>
        <img src="https://i.ibb.co.com/HV7bDwb/Icon-feather-message-circle.png" alt="" />
        <h3>Comments</h3>
      </div>

      <div className='minds'>
         <div className='item2'>
          <img src="https://i.ibb.co.com/QMxh7Np/Ellipse-580.png" alt="" />
          <h6>Fleet Vehicle Tracking</h6>
        </div>

        <div className='text2'>
        Pellentesque feugiat sem nec lacus ultricies gravida. Sed metus risus, fringilla ut velit quis, vulputate elementum nisi. Proin rhoncus quis lectus sed sollicitudin. Pellentesque et sollicitudin velit.
        </div> 
      </div>

        <div className='image'>
          <img src="/src/assets/Blog-img/Product Card.png" alt="" />
          <img src="/src/assets/Blog-img/Product Card.png" alt="" />
          <img src="/src/assets/Blog-img/Product Card.png" alt="" />
          <img src="/src/assets/Blog-img/Product Card.png" alt="" />
        </div>

        <div className='step'>
          <h5>To buy AIS 140 GPS devices</h5>
          <p>Call Now +91 – 1800 103 0274</p>
          <p>Drop Whatsapp message +91 – 78272 17494 for any queries about how to choose a tracker or to book Onelap Telematics (Hardware or Software solution).</p>
        </div>

        <div className='image2'>
          <img src="/src/assets/Blog-img/Group 244.png" alt="" />
           <img src="/src/assets/Blog-img/Group 244.png" alt="" />
           <img src="/src/assets/Blog-img/Group 244.png" alt="" />
          <img src="/src/assets/Blog-img/Group 244.png" alt="" /> 
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
                              <button>Send</button>
                        </div>
                      </form> 
                </div>        

                     


            
          </div>
            <Footer/>
    </div>
  )
}
