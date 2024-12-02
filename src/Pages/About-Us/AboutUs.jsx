import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './AboutUs.css';


export default function AboutUs() {
  return (
    <>
        <Header/>
        <div>
            <div className='banner-img'>
            <div className='container'>
                <div className='banner-text-area'>
                    <h2>Best GPS Tracking System Made in Nepal</h2>
                    <h5>Ensure Your Bike’s Security with Trackon Bike GPS Tracker</h5>
                </div>
            </div> 
            </div>
        
            <div>
                <div className='services'>
                    <h2><span>-</span>  Our Services <span>-</span> </h2>
                </div>
            </div>
            <div>
                <Container>
                <Row>
                    <Col sm={12} md={6} lg={8}>
                        <div className='ourcore'>
                            <h2>Our Core Service is to Make Fleet</h2>
                            <h2 className='management'><span>Management</span> Easier.</h2>
                            <p>Our mission is to provide the ultimate services for transport, bus, and
                            fleet management with ease. You will be provided with overall all tools
                            to manage your vehicles, passengers, transport, and all.</p>
                        </div>
                        <div className='icon-section container'>
                            <div>
                                <h4 className='vehi'> <img className='img-1' src="/src/assets/About-Us/img/gps.png" alt="" />GPS Vehicle Tracking System</h4>
                            </div>
                        <div className='main'>
                                <p>Our main product is a GPS Vehicle Tracking system that will help you 
                                    to find the precise location of your vehicles.</p>
                        </div>  
                        <div>
                                <h4 className='fleet'><img className='img-2' src="/src/assets/About-Us/img/print.png" alt="" />Fleet Management System</h4>
                         </div>
                        <div className='second-section'>
                             <p className='other'>Our other system is fleet management which can help you to manage 
                                large numbers of vehicles. You can track records of fuels, drivers,
                                vehicle conditions, servicing, and all.</p>
                        </div>
                            <div >
                                <h4 className='public'><img className='img-3' src="/src/assets/About-Us/img/people.png" alt="" />Public Vehicle Management</h4>
                            </div>
                      
                        <div>
                            <p className='our'>Our other system is fleet management which can help you to manage 
                                large numbers of vehicles. You can track records of fuels, drivers,
                                 vehicle conditions, servicing, and all.</p>
                        </div> 
                        </div>
                       
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='service container'>
                        <img  className='service-img' src="/src/assets/About-Us/img/our-service.png" alt="" />
                    </div>
                    
                    </Col>
                </Row>
                </Container>
                </div>
            <section>
                <div className='container'>
                    <h2 className='story'><span>-</span> Our Story <span>-</span> </h2>
                </div>
                <Container>
                <Row>
                    <Col sm={6} md={3} lg={3}>
                        <div className='active'>
                        <h3 className='number'>3000+</h3>
                        <h6 className='text'>Active Users</h6>
                        <h3 className='number-3'>800+</h3>
                        <h6 className='text'>Companies</h6>
                        </div>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <div className='number-2 data'>
                        <h3 className='number'>40+</h3>
                         <h6 className='text'>Companies</h6>
                        <h3 className='number-3'>1000+/S</h3>
                        <h6 className='text'>GPS Data Hits</h6>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                    <div className=' fastest-growing'>
                    <h2 className='fastest'>Fastest Growing GPS Tracking System in<span> Nepal</span> </h2>
                    <p className='we'>We are the fastest-growing GPS tracking system built locally in Nepal .
                         We are a team of young minds who have a dream to make Nepal 
                         digitally capable with local inventions and technological products.</p>
                  </div>
                    </Col>
                </Row>
                </Container>
            </section>
            <section>
                <div>
                    <h2 className='leaf'><span>-</span>  Recognized By <span>-</span> </h2>
                </div>
             
                     <div className='leaves container'>
                       
                            <img src="/src/assets/About-Us/img/leaf-1.png" alt="" />
                        
                            <img src="/src/assets/About-Us/img/leaf-2.png" alt="" />
                       
                   
                       
                            <img src="/src/assets/About-Us/img/leaf-3.png" alt="" />
                       
                    </div>
                
            </section>
        </div>

        <Footer/>
    </>
  )
}
