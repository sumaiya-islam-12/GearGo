import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './AllProduct.css';
import FetchProduct from '../../Components/FetchProduct/FetchProduct';

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
                // eslint-disable-next-line react/jsx-key
                product.map(products => <FetchProduct fetchdata={products}/>)
            }
        </div>                                   

        <Footer/>
    </div>
  )
}
