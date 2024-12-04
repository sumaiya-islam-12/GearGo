import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './pyment.css';
import Form from 'react-bootstrap/Form';


export default function pyment() {
  return (
    <div>
       <Header/>
       <div className='payment-tex'>
        <h1>payment</h1>
      </div>

      <div className='h4-tex'>
          
            <div >
              <Container>
              <Row className='col'>
                <Col>
                  <h4 className='row'>Billing details</h4>
                    <form className='Container-tex'>
                        <div className='type'>
                            <input type='First name *'placeholder='First name *'/>
                            <input type='last name *'placeholder='last name *'/>
                        </div>
                               <input type='company name *'placeholder='company name *'/>
                            <div className='type-tex'>
                                  <input type='Email *'placeholder='Email *'/>
                                  <input type='Phone *'placeholder='Phone *'/>
                             </div>
                                  
                                    <div className='type-2'>
                                        <input type='Country *'placeholder='Country *'/>
                                        <input type='state *'placeholder='state *'/>
                                     </div> 
                                          <div className='type-3' >
                                            <input type='city/town *'placeholder='city/town *'/>
                                            <input type='Zip Code *' placeholder='Zip Code *'/>
                                        </div>
                    </form>
                </Col>
               
                  <Col>
                  <div className='product-area'>
                  <h4>Your order</h4> 
                       <div className='product'> 
                          <div>
                            <h5>Product</h5> 
                          </div>
                          <div>
                            <h6>Total </h6>
                          </div>
                       </div>

                          <div className='product-name'> 
                            <div><h5>productName</h5></div>
                          <div> <h6> $99.00</h6></div>
                          </div>

                          <div className=' Subtotal'>     
                          <div><h5>Subtotal</h5></div>
                          <div>  <h6>$99.00</h6></div>
                         </div>
                      
                          <div className='Total'> 
                            <div>
                              <h6>Total</h6>
                            </div>
                           <div>
                           <h6> $99.00</h6>
                           </div>
                          </div>

                              <div className='check'>

                              <div  className='Check-type'>
                              <Form.Check type="radio" aria-label=" " />
                              <h6>  credit card</h6>
                              </div>
                              <div>
                              <img src='/src/assets/Payment/Img/PngItem_124356 1.png'/>
                              </div>

                              </div>
                                  <div className='pay'>
                                
                                  <div className='paypal'> 
                                    <Form.Check type="radio" aria-label=" " />  
                                    <h6> Pay pal</h6>
                                  </div>
                                  <div>
                                   <img src='/src/assets/Payment/Img/PngItem_124356 1.png'/>
                                  </div>
                                   
                                   </div>
                                  
                              
                              <div>
                                <h6>
                                your personal data will be used only to process your order, support your experience throughout this website,and for other purposes described in our privacy policy
                                </h6>

                               <div className='label'>
                                  <div className=''>
                                    <input type='checkbox'/> 
                                  </div>
                                  <div>
                                    <h6>i have read and agree t the website terms and conditions</h6>
                                  </div>
                               </div>
                                
                              </div>
              
                              <div className='product-button'>
                                <button>proceed to pay</button>
                              </div>
                  
                  
                  </div>
                
                     </Col>
               </Row>
         </Container>
      </div>  

    </div>




      <Footer></Footer>
    </div>
  )
}
