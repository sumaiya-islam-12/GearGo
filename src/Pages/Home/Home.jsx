import { Card } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './Home.css';



export default function Home() {
  return (
    <div>
        <Header/>
        <div className="">
        <div className="geargo container">
          <div className="geargo-img">
            <div className="geargo-text">
            <h1 className="home-head">Keep All Controls <br />
            <span>Of Your Vehicles</span> <br />
            In your Hand!</h1>
          <img src="/src/assets/Home/artwork.png" alt="" />
          <img src="/src/assets/Home/Group.png" alt="" />
          <div>
            <img src="/src/assets/Home/Group 11.png" alt="" />
          </div>
            </div>
            <div>
              <img src="/src/assets/Home/Group 105.png" alt="" />
              <div>
                <img src="/src/assets/Home/Chat Now button.png" alt="" className="chat-now" />
              </div>
            </div>
          </div>
          </div>
          <div className="choose-gps">
            <div className="container">
              <h1>-Why Choose GearGo GPS ?-</h1>
              <p>As a leading GPS tracking company in Nepal, Trackon GPS holds the strongest <br />
              position amongst similar companies. Since our launch in 2021, we have always <br />
               focused on providing excellent Customer Service and upgrading various Products <br />
                Features.
              </p>
              <div className="choose-gps-device">
                <div>
                  <img src="/src/assets/Home/mobile.png" alt="" />
                  <h5>500+</h5>
                  <p>App Downloads</p>
                </div>
                <div>
                  <img src="/src/assets/Home/Building.png" alt="" />
                  <h5>100+</h5>
                  <p>Small Businesses</p>
                </div>
                <div>
                  <img src="/src/assets/Home/B2B.png" alt="" />
                  <h5>20+</h5>
                  <p>App Downloads</p>
                </div>
                <div>
                  <img src="/src/assets/Home/National Wide Dealers.png" alt="" />
                  <h5>10+</h5>
                  <p>National Wide Dealers</p>
                </div>
                <div>
                  <img src="/src/assets/Home/Devices Online.png" alt="" />
                  <h5>1000+</h5>
                  <p>Devices Online</p>
                </div>
                <div>
                  <img src="/src/assets/Home/Daily Active Users.png" alt="" />
                  <h5>500+</h5>
                  <p>Daily Active Users</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="Our-Features">
            <div className="container">
              <h1>-Our Features-</h1>
              <p>With Trackon GPS app, you can put your mind at ease knowing that no matter where you or <br />
              your vehicle is, you will always be able to find it. You can also easily manage our powerful <br />
               tracking functions.

              </p>
              <div className="choose-gps-device">
                <div>
                  <img src="/src/assets/Home/real-time-traking.png" alt="" />
                  <h5>Real Time Tracking</h5>
                  <p>Live track your vehicle on mobile and be always aware of its location.</p>
                </div>
                <div>
                  <img src="/src/assets/Home/daily-history.png" alt="" />
                  <h5>Daily History
                  </h5>
                  <p>Watch full-day travel history and key driving points in 10 secs.</p>
                </div>
                <div>
                  <img src="/src/assets/Home/Remote Engine Access.png" alt="" />
                  <h5>Remote Engine Access</h5>
                  <p>Lock your engine from anywhere with the help of your mobile.</p>
                </div>
                <div>
                  <img src="/src/assets/Home/Set Geo-Fences.png" alt="" />
                  <h5>Set Geo-Fences</h5>
                  <p>Define safe areas and get notified when a vehicle enters/exits.</p>
                </div>
                <div>
                  <img src="/src/assets/Home/real-time-2.png" alt="" />
                  <h5>Real Time Tracking</h5>
                  <p>Live track your vehicle on mobile and be always aware of its location.</p>
                </div>
                <div>
                  <img src="/src/assets/Home/real-time-3.png" alt="" />
                  <h5>Real Time Tracking</h5>
                  <p>Live track your vehicle on mobile and be always aware of its location.</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="our-client container">
            <h1>-Our Top Corporate B2B Clients-</h1>
            <p>We have served many individuals and companies. To name a few, these organizations are some of our key clients.
            </p>
            <div className="our-client-b2b">
                <div>
                  <img src="/src/assets/Main-product-page-image/media-1.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Main-product-page-image/media-2.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Main-product-page-image/media-3.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Main-product-page-image/media-4.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Main-product-page-image/media-5.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Main-product-page-image/media-6.png" alt="" />
                </div>
            </div>
          </div>
          <div className="telecom-area container">
            <h1>
            Our Telecom Partners
            </h1>
            <p>
            Our partners are the best in their business, allowing us to provide you with the best-in-class service! We work in tandem to serve your best interest.
            </p>
            <div className="telecom-area-img">
              <div >
                <img src="/src/assets/Home/ncell.png" alt="" />
              </div>
              <div>
                <img src="/src/assets/Home/ntc.png" alt="" />
              </div>
            </div>
          </div>
          <div className="choose-gps">
            <div className="container">
                <h1>-Get started-</h1>
              <div className="get-started">
                <div>
                  <img src="/src/assets/Home/Group 63.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Home/Group 64.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Home/Group 65.png" alt="" />
                </div>
                <div>
                  <img src="/src/assets/Home/Group 66.png" alt="" />
                </div>
              </div>
              <div className="get-start">
                <div>
                <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title><h5>You will need a GPS Tracker</h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p>A GPS Tracker is needed to transmit the real-time location of the vehicle to the Trackon cloud server.</p></Card.Subtitle>
        
      </Card.Body>
    </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title><h5>You will need a SIM card</h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p>The GPS Tracker needs internet connectivity to send the data over the GSM network.
        </p></Card.Subtitle>
        
      </Card.Body>
    </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title><h5>Install the GPS Tracker
        </h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p>Get the GPS Tracker installed with the help of any local technician near you.</p></Card.Subtitle>
        
      </Card.Body>
    </Card>
                </div>
                <div>
                <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title><h5>Activate the GPS Tracker
        </h5></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p>Download Trackon App from Playstore/Appstore and signup and call our customer support team.
        </p></Card.Subtitle>
        
      </Card.Body>
    </Card>
                </div>
              </div>
              <h1>-Industries we cover-</h1>
              <div className="Industries">
                <div>
                  <img src="/src/assets/Home/Rectangle 23.png" alt="" />
                </div>
                <div className="fleet">
                  <h5>
                  Fleet Vehicle Tracking
                  </h5>
                  <p>
                  With Trackon GPS app, you can put your mind at ease knowing that no 
                  matter where you or your vehicle is, you will always be able to find it.
                   You can also easily manage our powerful tracking functions.
                  </p>
                </div>
              </div>
              <div>
                <h1>
              Shop Now and Order for Installation
                </h1>
                <p>Trackon GPS devices and services have very flexible and competitive pricing from where
                   you can easily select your best option according to your needs.</p>
                   <div className="traking-device">
                    <div>
                      <button>
                        <img src="/src/assets/Home/Soft Box Mockup 02 1 (1).png" alt="" />
                        <h5>GearGo Micro GPS Tracking Device</h5>
                        <h5>Rs. 10000.00 Rs. 8090.00</h5>
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src="/src/assets/Home/Soft Box Mockup 02 1 (1).png" alt="" />
                        <h5>GearGo Micro GPS Tracking Device</h5>
                        <h5>Rs. 10000.00 Rs. 8090.00</h5>
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src="/src/assets/Home/Soft Box Mockup 02 1 (1).png" alt="" />
                        <h5>GearGo Micro GPS Tracking Device</h5>
                        <h5>Rs. 10000.00 Rs. 8090.00</h5>
                      </button>
                    </div>
                   </div>
              </div>
              <div>
                <h1>-Lets Hear From Our Clients-</h1>
                <h4 className="lets-talk">If you’re still confused about taking our 
                  services, check out what our clients say about us.</h4>
                  <div className="review">
                    <div>
                      <button>
                      <img src="/src/assets/Home/Group 193.png" alt="" />
                      <p>I liked its wide coverage so that I could use it in rural areas<br />
                         as well while traveling to my village.</p>
                      </button>
                    </div>
                    <div>
                      <button>
                      <img src="/src/assets/Home/Group 193 (1).png" alt="" />
                      <p>I liked its wide coverage so that I could use it in rural areas <br />
                         as well while traveling to my village.</p>
                      </button>
                  
                    </div>
                    <div>
                      <button>
                      <img src="/src/assets/Home/Group 193 (2).png" alt="" />
                      <p>I liked its wide coverage so that I could use it in rural areas <br />
                         as well while traveling to my village.</p>
                      </button>
                    </div>
                  </div>
              </div>
              <div>
                <h1>Expert,s Review</h1>
                <button className="experts-review">
                  <img src="/src/assets/Main-product-page-image/client.png" alt="" />
                  <h5>Trackon GPS App Features | Main Highlights | Live Tracking |
                     Geofences | Speed Alerts | And More ...</h5>
                     <p>GearGo</p>
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className='get'>-Get started-</h1>
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


        <Footer></Footer>
    </div>
  )
}
