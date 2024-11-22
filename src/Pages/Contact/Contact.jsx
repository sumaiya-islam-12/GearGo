import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Contact.css'

export default function Contact() {
  return (
    <div>
        <Header/>
      <h1 className='contact-tex'>-Contact-</h1>
     <div>
      <Container>
     <Row>
        <Col>
        <img src="/src/assets/Contact/img/undraw_connecting_teams_re_hno7 1.png" alt="" />
        </Col>
        <Col>
        <from className="Container-from">
          <input type='name'placeholder=' Name'/>
          
          <input type='Phone Number'placeholder='Phone Number'/>
        
          <input type='Email'placeholder='Email'/>
         
          <input type='Country/Region'placeholder='Country/Region'/>
           
          <input type='Interested Product'placeholder='Interested Product'/>
           
           <input type='Message'placeholder='Message'/>
          
           <input type='check box'placeholder='check box'/>

           
           <button> Send</button>
        
        </from>
        </Col>
      </Row>
    </Container>
     </div>
      <Footer/>
    </div>
  )
}
