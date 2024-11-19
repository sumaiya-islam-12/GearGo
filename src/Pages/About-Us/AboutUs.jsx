import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


export default function AboutUs() {
  return (
    <>
        <Header/>
        <div className='banner-img'>
            <div className='container'>
                <div className='banner-text-area'>
                    <h2>Best GPS Tracking System Made in Nepal</h2>
                    <h5>Ensure Your Bike’s Security with Trackon Bike GPS Tracker</h5>
                </div>
            </div> 
            <div>
                <div>
                    <h2 className='service'>Our Services</h2>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}
