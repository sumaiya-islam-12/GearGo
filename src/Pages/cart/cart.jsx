import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Cart.css';

export default function Cart() {
  return (
    <div>
         <Header/>

         <Row className='container'>
            <Col md={2}>
                <div>
                    <div><img className='cart-side-img' src="/src/assets/product-img/Product img (1).png" alt="" /></div>
                    <div><img className='cart-side-img' src="/src/assets/product-img/Product img (1).png" alt="" /></div>
                    <div><img className='cart-side-img' src="/src/assets/product-img/Product img (1).png" alt="" /></div>
                    <div><img className='cart-side-img' src="/src/assets/product-img/Youtube product demo.png" alt="" /></div>
                </div>
            </Col>
            <Col md={6}>
                <div>
                <img  className='img-2' src="/src/assets/product-img/Rectangle 102.png" alt="" />
                </div>
              
                <div className='term'>
                    <button className='btn8'>Add to cart</button>
                    <button className='btn9'>Buy Now</button>
                    </div>
                <div className='term2'>
                    <button  className='btn10'>Sale Ends in <span>0d: 10h: 18m:9s</span></button>
                </div>
            </Col>
            <Col md={4}>

                <div>
                    <h3 className='mm'>gearGo Micro with Vi Sim - 1 year</h3>
                </div>
                <div className='mind'>
                    <button className='btn-1'>Scooter</button>
                    <button className='btn-2'>car</button>
                    <button className='btn-3'>Bike</button>
                    <button className='btn-4'>Truck</button>
                </div>
                    <div className='text'>
                        <button className='btn-5'>4.5</button>
                        <h5>7,000+ Reviews</h5>
                    </div>
                    <div className='text2'>
                    <h5>Extra ₹3690 discount</h5>
                    </div>
                    <div className='tu'>
                    <h4> Deal Price : ₹3190 54% off</h4>
                    </div>
                    <div className='mp'>
                    <h4> Regular Price : ₹6880</h4>
                    </div>
                    <div className='a'>
                    <h4> Choose SIM Operator</h4>
                    </div>
                    <div className='b'>
                        <button className='btn-b'>Airtel</button>
                        <button className='btn-b'>Vodaphone</button>
                    </div>
                    <div className='c'>
                    <h4> Choose Variant</h4>
                    </div>
                    <div>
                        <button className='btn-d'>
                            <div>
                                <span>₹ 3190</span>
                                <p>with 1 year Subscription</p>
                                <p>₹ 3190 per year</p>
                            </div>
                        </button>
                        <button className='btn-d'>
                            <div>
                                <span>₹ 3190</span>
                                <p>with 1 year Subscription</p>
                                <p>₹ 3190 per year</p>
                            </div>
                        </button>
                        <button className='btn-d'>
                            <div>
                                <span>₹ 3190</span>
                                <p>with 1 year Subscription</p>
                                <p>₹ 3190 per year</p>
                            </div>
                        </button>
                    </div>
                 
                 
                
            </Col>
        </Row>
    <Footer/>


    </div>
  )
}

    