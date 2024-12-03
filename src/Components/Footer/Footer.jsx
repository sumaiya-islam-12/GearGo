import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <>
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B34040" d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,208C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
    
    <div className='bg'>
      
    <div className='container'>

      <div>
          <Row>
            <Col sm={12} md={6}>
              <a href="#"> <img src="/src/assets/logo/Logo (2).png" alt="#" /></a>
            </Col>
            <Col sm={12} md={6}>
              <ul className='footer-link'>
                <li>  <a href="#">Home</a></li>
                <li><a href="#">Certificates</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
        <Col sm={12} md={6}>
        <p className='p'>Trackon Nepal Pvt. Ltd. is a GPS Tracking company, offering 
        <br />professional vehicle tracking and fleet management solutions <br /> in Nepal.
       </p>
       <p className='p'>We provide Trackon GPS, the most affordable and innovative 
        <br />tracking system on the market today. Our GPS trackers are <br />
        scalable and can offer extensive functionality, depending on <br /> your needs.</p>
        
         
       
        </Col>
        <Col sm={12} md={12} lg={3} className='pera'>
        <li><a href="#">Customer Care:</a></li>
          <li><a href="#">Connect on whatsapp:</a></li>
          <li><a href="#">Working hours:</a></li>
          <li><a href="#">Email us at:</a></li>
          <li><a href="#">Address:</a></li>
        </Col>
        <Col sm={12} md={12} lg={3}>
        <li><a href="#">9820754740,  9820754741</a></li>
          <li><a href="#">9820754740</a></li>
          <li><a href="#">10:00 am - 6:00 pm</a></li>
          <li><a href="#">contact@trackon-gps.com</a></li>
          <li><a href="#">Dharan Line, Itahari-4, Sunsari</a></li>
       
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={6}>
        <a href="#"><img src="/src/assets/Footer-img/image 1.png" alt="" /></a>
        <a href="#"><img src="/src/assets/Footer-img/image 2.png" alt="" /></a>
              <p className='text-foot'>Approved by the Government of Nepal In partnership with Nepal police, Nepal Telecom </p>
        </Col>
        <Col sm={12} md={6} lg={6}>
             <p className='text-foot'>© 2022, Trackon Nepal Pvt. Ltd.</p>
        </Col>
      </Row>
      <Row  className='bg-1'>
        <Col sm={12} md={6} lg={6}><li><a href="#"> Buy GPS Tracker For Bike and Car Online..! </a></li></Col>
        <Col sm={12} md={3} lg={3}> <li><a href="#">9820754740</a></li></Col>
        <Col sm={12} md={3} lg={3}><li> <a href="#">9820754740,  9820754741</a></li></Col>
      </Row>
      </div>
      {/* <div className="">
      <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B34040" d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,208C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
        <div className=''>
       <div className=''>
       <a href="#"> <img src="/src/assets/logo/Logo (2).png" alt="#" /></a>
       <p className='p'>Trackon Nepal Pvt. Ltd. is a GPS Tracking company, offering 
        <br />professional vehicle tracking and fleet management solutions <br /> in Nepal.
       </p>
       <p className='p'>We provide Trackon GPS, the most affordable and innovative 
        <br />tracking system on the market today. Our GPS trackers are <br />
        scalable and can offer extensive functionality, depending on <br /> your needs.</p>
        <div className=''>
          <div className='copyright'>
       <div className='footer-l'>
       <div>
          <a href="#"><img src="/src/assets/Footer-img/image 1.png" alt="" /></a>
          </div>
          <div>
          <a href="#"><img src="/src/assets/Footer-img/image 2.png" alt="" /></a>
          </div>
          
       </div>
          
        </div>
          <p className='text-foot'>Approved by the Government of Nepal In partnership with Nepal police, Nepal Telecom </p>
       </div>
       </div>
     
      <div>
      <ul className='footer-link'>
        <li>  <a href="#">Home</a>
        

          <li><a href="#">Customer Care:</a></li>
          <li><a href="#">Connect on whatsapp:</a></li>
          <li><a href="#">Working hours:</a></li>
          <li><a href="#">Email us at:</a></li>
          <li><a href="#">Address:</a></li>
        
        </li>
        <li><a href="#">Certificates</a></li>
        <li><a href="#" className='Faq'>FAQ</a></li>
        <div className="privacy">
        <li><a href="#" className=''>Privacy Policy</a>
      
      <li><a href="#">9820754740,  9820754741</a></li>
          <li><a href="#">9820754740</a></li>
          <li><a href="#">10:00 am - 6:00 pm</a></li>
          <li><a href="#">contact@trackon-gps.com</a></li>
          <li><a href="#">Dharan Line, Itahari-4, Sunsari</a></li>
      
        </li>
        </div>
        
        <li><a href="#">Terms and Conditions</a></li>
        
      </ul>
        
      </div>
      
          
        </div>
        
      </div>
        
        <div className='bg-1'>
          <div>
            <a href="#">Buy GPS Tracker For Bike and Car Online..!</a>
          </div>
          <div>
            <a href="#" className='bg-1-num'>9820754740</a>
          </div>
          <div>
            <a href="#">9820754740,  9820754741</a>
          </div>
        </div> */}
    </div>
    </div>
    </>
  )
}

