import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Car.css'

export default function Car() {
return (
    // <div>Bike</div>
    <div>
        <Header/>

                    {/* <!-- Banner Section Start --> */}
            <section className="banner-section">
                <div className="container">
                    <div className="banner-area">
                        <div>
                            <h1>Best GPS Tracker For <br/> Car In Nepal</h1>
                            <p>Ensure Your Car Security with Trackon <br/> Car GPS Tracker</p>
                        </div>
                    
                        <div>
                            <form className="form">
                                <h4>Get an offer in your mobile</h4>
                                <input type="text" placeholder="Phone Number"/><br/>
                                <input type="text" placeholder="Number of vehicles"/><br/>
                                <button type="submit" className="bttn">Send</button>
                            </form>
                        </div>
                    </div>  
                </div>
            </section>
            {/* <!-- Banner section close --> */}
            
            
            {/* <!-- feature section start --> */}
            <div className="container">
            <div className="features-section">
                <h2>-Why Is Trackon GPS The Best GPS Car Tracker In Nepal?-</h2>

                <div className="card-area">
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/real-time-image/real-time-image.png" className="icon"/>Real-time Car Tracking System</h4>
                        <p>Stay assured about the security of your bike, no matter where it is. Trackon Bike GPS tracker allows you to track and monitor your asset intelligently to avoid theft.
                        </p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/lock-unlock-image/lock-unlock-image.png" className="icon"/> Car GPS Lock/Unlock</h4>
                        <p>The bike GPS device from Trackon allows you to lock and unlock your bike remotely. Use our bike GPS tracker to maintain complete control over your vehicle.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/maltiple-alerts-image/maltiple-alerts-image.png" className="icon"/>Multiple Alerts</h4>
                        <p>Get instant SMS/Notification alerts of specific events such as ignition turn, over-speeding, geo-fence, bike theft attempt, etc., with our bike GPS security system.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/car-security-image/car-security-image.png" className="icon"/>Car Security</h4>
                        <p>Our Bike GPS tracking system gives you complete control over your vehicle. You can keep track of your bike`s movements and make sure it`s parked where it`s intended to be.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/fuel-image/fuel-image.png" className="icon"/> Control Fuel Expenses</h4>
                        <p>Trackon can help you save a lot of money on petrol and keep track of your fuel costs.
                             With our GPS tracking app, you can monitor your riding habits and save your expenses daily.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/car/image/monitor-fuel-image/monitor-fuel-image.png" className="icon"/>Monitor Fuel Expenses</h4>
                        <p>Trackon can help you save a lot of money on petrol and keep track of your fuel costs. With our 
                            GPS tracking app, you can monitor your riding habits and save your expenses daily.</p>
                    </div>   
                </div>
                <button type="submit" className="bttn">Request Demo</button>
            </div>
            </div>
            {/* <!-- feature section close --> */}

            {/* <!-- checkbox-secion start --> */}
            <div className="container">
            <div className="comparison-section">
                <h2>-Trackon`s Car GPS Tracking Devices Vs Other Unbranded Devices-</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Features</th>
                        <th>Trackon</th>
                        <th>Other Devices</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Real-Time Tracking</td>
                        <td><input type="checkbox" className="custom-checkbox check"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>
                    <tr>
                        <td>Ignition Alerts</td>
                        <td><input type="checkbox" className="custom-checkbox checked"/></td>
                        <td><input type="checkbox" className="custom-checkbox checked"/></td>
                    </tr>
                    <tr>
                        <td>Vehicle Lock</td>
                        <td><input type="checkbox" className="custom-checkbox checked"/></td>
                        <td><input type="checkbox" className="custom-checkbox checked"/></td>
                    </tr>
                    <tr>
                        <td>1 year Device Warranty</td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>
                    <tr>
                        <td>Fuel Monitoring</td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>
                    <tr>
                        <td>Over-Speeding Report</td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>
                    <tr>
                        <td>Location History ( 90 Days )</td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>
                    <tr>
                        <td>Geo-Fencing</td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                        <td><input type="checkbox" className="custom-checkbox"/></td>
                    </tr>   
                    </tbody>
                </table>
            </div>
            </div>
            {/* <!-- checkbox-section close --> */}

            {/* <!-- Tracker section start --> */}
            <section className="tracker-section">
                <div className="container">
                    <div className="card-area">
                        <div>
                            <img src="/src/assets/car/image/best-car-photo/best-car-photo.png" alt="" />
                        </div>
                    
                        <div>
                        <h4>Get the best car GPS tracker in Nepal.</h4>
                        <p>Monitoring a single car or a fleet of cars can be challenging with a huge financial impact.
                            You might not be able to find a car GPS that is reasonable and satisfies your needs if you go out 
                            to get one.
                            Trackon, on the other hand, has the most affordable GPS tracker for cars in Nepal and exceptional 
                            customer service. 
                            By offering a car GPS tracker with a mobile app, we make car monitoring a simple task for you.
                            In addition, our entire Nepal service ensures that you have to worry about how to install a GPS 
                            tracker in your Car</p>
                            
                        <button type="submit" className="bttn">Buy Now</button>
                            
                        </div>
                    </div>  
                </div>
            </section>
            
            {/* <!-- App section start --> */}
            <div className="container">
                <div className="app-section">
                    <div className="app-card-area-phone">
                        <div className='app-card'>
                        <h4>With our one-of-a-kind bike GPS tracker app, you can learn more about your bike.</h4>
                        <p>Our bike GPS solution includes the ability to track your bike from any location using 
                            a single mobile application. Whether you`re looking for Bike GPS tracker app on Android 
                            or iPhone, we`ve got you covered.</p>   
                            
                            <button type="submit" className='pay-button'>
                            <a href=""><img src="/src/assets/car/image/google-pay-image/google-pay-image.png" alt="" /></a>
                            </button>
                            <button type="submit">
                            <a href=""><img src="/src/assets/car/image/app-store-image/app-store-image.png" alt="" /></a>
                            </button>
                        
                        </div>

                        <div>
                            <img className="phone-img" src="/src/assets/car/image/phone-image/phone-image.png" alt=""/>
                        </div>         
                    </div>  
                </div>
            </div>

            {/* book-area-start */}
            <section id="book-area">
                <div className="book-area-start">
                    <div className="container">
                        <div className='book-text'>
                            <h2>-Checkout Trackon`s Product to Protect Your Car-</h2>
                            <div className="book-card">
                                <div className="book">
                                    <img src="/src/assets/car/image/product-image/product-image.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/car/image/product-image/product-image.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/car/image/product-image/product-image.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/car/image/product-image/product-image.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/car/image/product-image/product-image.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            {/* book-area-close */}



        <Footer/>
</div>
)
}