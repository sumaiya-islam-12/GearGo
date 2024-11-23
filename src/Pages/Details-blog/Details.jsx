import './Details.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


export default function Details() {
  return (
    <div>
        <Header/>
            <div className='container' >

              
              <div  className='heading'>
                  Why AIS 140 GPS devices (RTO certified)
                  Are mandatory?
                </div>

                <div className='text'>
                        With Trackon GPS app, you can put your mind at ease knowing that no matter where you or your vehicle is, you will always be able to find it. You can also easily manage our powerful tracking functions.
                </div>
             

                <div className='picture'>
                    <img src="/src/assets/Blog-img/Rectangle 44.png" alt="" />
                </div>

                <div className='heads'>
                Components of AIS 140 GPS devices compatible systems:

                <p>
                Since the entire list of requirements for an AIS 140 is a very vast and comprehensive set of instructions, we can divide the specifications into 5 categories namely,
                </p>
                </div>

                <div className='count'>
                <li>1. Hardware</li>
                <li>2. Software</li>
                <li>3. Server</li>
                <li>4. Testing</li>
                <li>5. Control unit</li>
                </div>

                <div className='picture'>
                    <img src="/src/assets/Blog-img/Rectangle 44.png" alt="" />
                </div>

                <div className='heading'>
                1. Hardware:
                  <div className='faq'>
                  <li>. First of all, a MODEM to effectively connect to the system is necessary.
                    Without a MODEM no information can be transmitted to and from the vehicle.
                  </li>
                  <li>. Access to GPS satellite services such as GNSS or IRNSS/NAVIC with a minimum accuracy of either 2.5 meters or 6 meters depending on the capability of the device.</li>
                  <li>. Battery backup of at least 4 hours(standard) to support normal operations of the vehicle.</li>
                  <li>. Emergency Buttons must be included in the vehicle which sends information such as location details to a specified IP Address or in case there is no GPRS connectivity send an SMS.</li>
                  <li>. An embedded SIM is also a suggestion in this protocol.</li>
                  <li>. Device must be resistant to dust, temperature, vibration, water splash (with minimum IP 65rating) and tamper-proof.</li>
                
                    </div>
                </div>

                <div className='picture'>
                    <img src="/src/assets/Blog-img/Group 216.png" alt="" />
                </div>


                  <div className='heading2'>
                    The salient features of Onelap’s GPS Tracker are:
                    </div>
                  <div className='faqs'>
                  <li>1. Firstly, Real-time tracking of your vehicle via an application on your mobile phone.</li>         
                  <li>2. Vehicle performance statistics.</li>
                  <li>3. Data History.</li>
                  <li>4. Remote Engine Immobilization at your fingertips accessible from anywhere.</li>
                  <li>5. Define Geofences or Safe zones on the map.</li>
                  <li>6. Finally, much more affordable than other GPS tracking solutions in the market.</li>                
                  </div>
                

                
     




            </div>
        <Footer/>
    </div>
  )
}
