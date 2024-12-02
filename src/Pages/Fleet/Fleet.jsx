import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Fleet.css'

export default function Fleet() {
return (
    // <div>Fleet</div>
    <div>
        <Header/>

                    {/* <!-- Banner Section Start --> */}
            <section className="banner-section">
                <div className="container">
                    <div className="banner-card-area">
                        <div>
                            <h1>Best Fleet Tracking<br/>System in Nepal</h1>
                            <p>Save up to 20% annually on fuel with<br/> Trackons Fleet Tracking</p>
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
                <h2>-Why is Trackon GPS the Best GPS Fleet Tracker in Nepal?-</h2>

                <div className="card-area">
                    <div className="feature">
                    <h4><img src="/src/assets/Fleet/Image/Icon material-location-on.png" className="icon"/>GPS Tracking for Fleets</h4>
                        <p>Stay assured about the security of your bike, no matter where it is. Trackon Bike GPS tracker allows you to track and monitor your asset intelligently to avoid theft.
                        </p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/Fleet/Image/Icon material-settings-remote.png" className="icon"/> Remote Lock for Fleetsk</h4>
                        <p>The bike GPS device from Trackon allows you to lock and unlock your bike remotely. Use our bike GPS tracker to maintain complete control over your vehicle..</p>
                    </div>
                    <div className="feature">
                    <h4><img src="/src/assets/Fleet/Frame.png" className="icon"/>Multiple Alerts</h4>
                        <p>Get instant SMS/Notification alerts of specific events such as ignition turn, over-speeding, geo-fence, bike theft attempt, etc., with our bike GPS security system.</p>
                    </div>
                    <div className="feature">
                    <h4><img src="/src/assets/Fleet/Image/Icon awesome-shield-alt.png" className="icon"/>Fleet Safety at its Finest</h4>
                        <p>Our Bike GPS tracking system gives you complete control over your vehicle. You can keep track of your bike movements and make sure its parked where it intended to be.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/Fleet/Image/Icon ionic-md-speedometer.png" className="icon"/> Monitor Fuel Expenses</h4>
                        <p>Trackon can help you save a lot of money on petrol and keep track of your fuel costs. With our GPS tracking app, you can monitor your riding habits and save your expenses daily.</p>
                    </div>
                    <div className="feature">
                        <h4><img src="/src/assets/Fleet/Image/Icon ionic-md-speedometer (1).png" className="icon"/>Fleet Reports</h4>
                        <p>Trackon can help you save a lot of money on petrol and keep track of your fuel costs. With our GPS tracking app, you can monitor your riding habits and save your expenses daily.</p>
                    </div>   
                </div>
                <button type="submit" className="bttn">Request Demo</button>
            </div>
            </div>
            {/* <!-- feature section close --> */}

            {/* <!-- checkbox-secion start --> */}
            <div className="container">
            <div className="comparison-section">
                <h2></h2>
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
                            <img src="/src/assets/Fleet/Image/undraw_delivery_truck_vt6p 1.png" alt=""/>
                        </div>
                    
                        <div>
                        <h4>GPS Fleet Management Made Simple</h4>
                        <p>Investing in Trackon Fleet GPS Monitoring can change the face of Nepals transportation sector. Our fleet monitoring solution enables you to meet delivery dates while strengthening your customer base. You can digitize your business operations and achieve maximum growth with our services. We can assist you in effectively simplifying your fleet operations. Maintain real-time fleet tracking and establish a transparent communication channel with your on-the-road staff.</p>
                            
                        <button type="submit" className="bttn">Buy Now</button>
                            
                        </div>
                    </div>  
                </div>
            </section>
            
            {/* <!-- App section start --> */}
            <div className="container">
                <div className="app-section">
                    <div className="app-card-area">
                        <div className='app-card'>
                        <h4>With our one-of-a-kind bike GPS tracker app, you can learn more about your bike.</h4>
                        <p>Our bike GPS solution includes the ability to track your bike from any location using a single mobile application. Whether you`re looking for Bike GPS tracker app on Android or iPhone, we`ve got you covered.</p>   
                            
                            <button type="submit" className='pay-button'>
                            <a href=""><img src="/src/assets/Fleet/Image/artwork.png" alt=""/></a>
                            </button>
                            <button type="submit">
                            <a href=""><img src="/src/assets/Fleet/Image/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917 1.png" alt=""/></a>
                            </button>
                        
                        </div>

                        <div>
                            <img className="phone-img" src="/src/assets/Fleet/Image/mockrocket-capture (5) 1 (1).png" alt=""/>
                        </div>         
                    </div>  
                </div>
                </div>
                
                 {/* <!-- Book section start --> */}
                <section id="book-area">
                <div className="book-area-start">
                    <div className="container">
                        <div className='book-text'>
                            <h2>-Checkout Trackon`s Product to Protect Your Fleet-</h2>
                            <div className="book-card">
                                <div className="book">
                                    <img src="/src/assets/Fleet/Image/Soft Box Mockup 02 1.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/Fleet/Image/Soft Box Mockup 02 1.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/Fleet/Image/Soft Box Mockup 02 1.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/Fleet/Image/Soft Box Mockup 02 1.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                                <div className="book">
                                    <img src="/src/assets/Fleet/Image/Soft Box Mockup 02 1.png" alt=""/>
                                    <p>GearGo Micro GPS Tracking Device</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>            
            
        <Footer/>
    </div>
)
}
