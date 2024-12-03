import './Certificatrs.css'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export default function Cer() {
  return (
<div>
    <Header/>
    <div className="container">
        <div className="certificates">
        <h1>Certificates</h1>  
        </div>
       <div className="Approval">
        <h1>Approval</h1>
       
       <p>
        
        GPS Tracking devices have to be approved by NTA (Nepal Telecommunications Authority) for it saftey and standard for use in Nepal. All Devices that are not TYPE Approved by NTA cannot be guaranteed for its safety and standard and it is illegal according to Nepal’s law.
       <br/>
        
        Having GPS tracking devices TYPE APPROVED by NTA alone does not mean that one can operate and sell those devices in Nepal. The Ministry of Information and Communications (MOIC) have to give licence in this regard.
      
       <br/>
        All our GPS Trackers have been Type Approved by NTA and we have also been licensed by MOIC. Above this, all our devices have received CE and FCC certifications for its quality.
        <br/>
        
        Below are some of the approval certificates and licence issued to us both by NTA and MOIC.
        <br/>
        </p>

        </div>
        <div className=" card-area">
            <div className="cardd">    
                <img src="/src/assets/Certificates/mm.png" alt="" />
            </div>
            <div className="cardd">    
                 <img src="/src/assets/certificates/mm.png" alt="" />
            </div>
            <div className="cardd">    
                <img src="/src/assets/Certificates/mm.png" alt="" />
            </div>
            <div className="cardd">    
                <img src="/src/assets/Certificates/mm.png" alt="" />
            </div>
       
        </div>

        
        </div>
         <Footer/>       
        </div>
  )
}