import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import FetchProduct from '../../Components/fetchProduct/FetchProduct';
import './AllProduct.css';

export default function AllProduct() {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('/public/product/Product.json')
        .then(res => res.json())
        .then(data => setProduct(data)
        )
    });

  return (
    <div>
        <Header/>

        <div className='product-area container'>
            {
                product.map(products => <FetchProduct fetchdata={products}/>)
            }
        </div>                                   

        <Footer/>
    </div>
  )
}
