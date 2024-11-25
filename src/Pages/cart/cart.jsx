import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export default function cart() {
  return (
    <div>
         <Header/>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                <div>
                <img src="/src/assets/product-img/Product img (1).png" alt="" />
                </div>
                </Col>
                <Col md="auto"><img src="/src/assets/product-img/Product img (1).png" alt=""/>
                </Col>
                <Col xs lg="2">
                <div>
                    <img src="src/assets/product-img/Product img (1).png" alt="" />
                </div>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md="auto"><img src="/src/assets/product-img/Youtube product demo.png" alt="" />
                </Col>
                <Col xs lg="2">
                <div>
                <img src="/src/assets/product-img/Rectangle 102.png" alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    <Footer/>



    
    </div>
  )
}
