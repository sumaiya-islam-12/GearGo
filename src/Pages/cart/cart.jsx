

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function cart() {
    return (
      <div>cart</div>
    )
  }

function AutoLayoutVariableExample() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
        <img src="/src/assets/product-img/Product img (1).png" alt="" />
        
        
          
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
        <img src="/src/assets/product-img/Product img (1).png" alt="" />
          
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
        src/assets/product-img/Product img.png
          
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutVariableExample;
