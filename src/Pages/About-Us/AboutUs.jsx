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
                <div className='service'>
                    <h2><span>-</span>  Our Services <span>-</span> </h2>
                </div>
            </div>
            <div>
                <Container>
                <Row>
                    <Col xs={12} sm={12} md={8}>
                        <div className='ourcore'>
                            <h2>Our Core Service is to Make Fleet</h2>
                            <h2 className='management'><span>Management</span> Easier.</h2>
                            <p>Our mission is to provide the ultimate services for transport, bus, and
                            fleet management with ease. You will be provided with overall all tools
                            to manage your vehicles, passengers, transport, and all.</p>
                        </div>
                        <div className='flex-1'>
                            <div className='img-1'>
                                <img src="/src/assets/About-Us/img/gps.png" alt="" />
                            </div>
                            <div className='vehi'>
                                <h4>GPS Vehicle Tracking System</h4>
                            </div>
                        </div>
                        <div className='main'>
                                <p>Our main product is a GPS Vehicle Tracking system that will help you 
                                    to find the precise location of your vehicles.</p>
                        </div>
                        <div className='flex-2'>
                            <div>
                                <img src="/src/assets/About-Us/img/print.png" alt="" />
                            </div>
                            <div>
                                <h4 className='fleet'>Fleet Management System</h4>
                            </div>
                        </div>
                        <div>
                             <p className='other'>Our other system is fleet management which can help you to manage 
                                large numbers of vehicles. You can track records of fuels, drivers,
                                vehicle conditions, servicing, and all.</p>
                        </div>
                        <div className='flex-3'>
                            <div>
                                <img src="/src/assets/About-Us/img/people.png" alt="" />
                            </div>
                            <div>
                                <h4 className='public'>Public Vehicle Management</h4>
                            </div>
                        </div>
                        <div>
                            <p className='our'>Our other system is fleet management which can help you to manage 
                                large numbers of vehicles. You can track records of fuels, drivers,
                                 vehicle conditions, servicing, and all.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                    <div className='service container'>
                        <img src="/src/assets/About-Us/img/our-service.png" alt="" />
                    </div>
                    
                    </Col>
                </Row>
                </Container>
                </div>
            <section>
                <div className='container'>
                    <h2 className='story'><span>-</span> Our Story <span>-</span> </h2>
                </div>
                <div className='flex-5 container'>
                  <div className='flex-4 container'>
                    <div className='active container'>
                        <h3 className='number'>3000+</h3>
                        <h6 className='text'>Active Users</h6>
                        <h3 className='number-3'>800+</h3>
                        <h6 className='text'>Companies</h6>
                    </div>
                    <div className='number-2 data container'>
                        <h3 className='number'>40+</h3>
                         <h6 className='text'>Companies</h6>
                        <h3 className='number-3'>1000+/S</h3>
                        <h6 className='text'>GPS Data Hits</h6>
                    </div>
                  </div>
                  <div className='container'>
                    <h2 className='fastest'>Fastest Growing GPS Tracking System in<span> Nepal</span> </h2>
                    <p className='we'>We are the fastest-growing GPS tracking system built locally in Nepal .
                         We are a team of young minds who have a dream to make Nepal 
                         digitally capable with local inventions and technological products.</p>
                  </div>
                </div>
            </section>
            <section>
                <div>
                    <h2 className='leaf'><span>-</span>  Recognized By <span>-</span> </h2>
                </div>
                    <div className='leaves container'>
                        <div>
                            <img src="/src/assets/About-Us/img/leaf-1.png" alt="" />
                        </div>
                        <div>
                            <img src="/src/assets/About-Us/img/leaf-2.png" alt="" />
                        </div>
                   
                        <div>
                            <img src="/src/assets/About-Us/img/leaf-3.png" alt="" />
                        </div>
                    </div>
                
            </section>
        </div>

        <Footer/>
    </>
  )
}
