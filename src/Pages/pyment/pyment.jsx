import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


export default function pyment() {
  return (
    <div>
       <Header/>
       <div className='payment-tex'>
        <h1>payment</h1>
      </div>

      <div className='h4-tex'>
          <h4>Billing details</h4>
          <h4>Your order</h4>
              <Container>
              <Row>
                <Col>
                    <form>
                        <div>
                            <input type='First name *'placeholder='First name *'/>
                            <input type='last name *'placeholder='last name *'/>
                        </div>
                               <input type='company name *'placeholder='company name *'/>
                            <div className='type-tex'>
                                  <input type='Email *'placeholder='Email *'/>
                                  <input type='Phone *'placeholder='Phone *'/>
                                  <input type='Country *'placeholder='Country *'/>
                                  <input type='state *'placeholder='state *'/>
                                  <input type='city/town *'placeholder='city/town *'/>
                                  <input type='Zip Code *' placeholder='Zip Code *'/>
                            </div>
                    </form>
                </Col>
               
                  <Col>
                  <form>
                      <input type='Product'placeholder='Product'/>
                      <input type='Total'placeholder='Total'/>
                      <input type='product name'placeholder='product name'/>
                      <input type='$99.00'placeholder='$99.00'/>
                      <input type='Subtotal'placeholder='Subtotal'/>
                      <input type='$99.00'placeholder='$99.00'/>
                      <input type='Total'placeholder='Total'/>
                      <input type='$99.00'placeholder='$99.00'/>
                  <div>
                        <input type='credit card'placeholder='credit card'/>
                          <img src='/src/assets/Payment/Img/PngItem_124356 1.png'/>
                        <input type='Pay pal'placeholder='Pay pal'/>
                        <img src='/src/assets/Payment/Img/PngItem_124356 1.png'/>
                  </div>
                  <div>
                  <h6>
                  your personal data will be used only to process your order, support your experience throughout this website,and for other purposes described in our privacy policy
                  </h6>
                  <input type='checkbox'/>
                  <label>
                  i have read and agree t the website terms and conditions
                  </label>
                  </div>
              
                  <button>
                  proceed to pay
                  </button>
                  
                  
                  </form>
                  </Col>
              </Row>
            </Container>
       </div>




      <Footer></Footer>
    </div>
  )
}


  