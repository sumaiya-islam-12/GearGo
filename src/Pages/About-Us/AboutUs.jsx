import { Col, Row } from 'react-bootstrap'
import './AboutUs.css'
export default function AboutUs() {
  return (
    <div className='banner-img'>
        <div className='container'>
            <div className='banner-text-area'>
                <h2>Best GPS Tracking System Made in Nepal</h2>
                <h5>Ensure Your Bike’s Security with Trackon Bike GPS Tracker</h5>
            </div>
           </div> 
           <div>
            <div>
                <h2 className='service'>Our Services</h2>
            </div>
           <Row>
            <Col>
                <div>
                    <h3>Our Core Service is to Make Fleet<br> Management Easier.</br></h3>
                    <p>Our mission is to provide the ultimate services for transport, bus, and <br>fleet management with ease. You will be provided with overall all tools </br>to manage your vehicles, passengers, transport, and all.</p>
                </div>
            </Col>



            <Col>
                <div>
                    <img src="/src/assets/About-Us/img/our-service.png" alt="" />
                </div>
            </Col>
        </Row>
           </div>











    </div> 
  )
}
