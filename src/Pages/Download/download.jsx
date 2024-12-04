
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Download.css";


export default function Download() {
  return (
 
    <>
      <section>
         <Header/>
            <div className="container">
           
               <div className="text">
                <h1>-Get Gear Go on All your Devices-</h1>
                <img className="image-area" src="/src/assets/Download-img/download.png" alt="" />
               </div>
               <div className="sayma">
                <div className="keya">
                <img src="/src/assets/Download-img/Windows icon.png" alt="" />
                <h5>Windows </h5>
                <button>Download </button>
                </div>

                <div className="keya">
                <img src="/src/assets/Download-img/path2.png" alt="" />
                <h5>Mac OS </h5>
                <button>Download </button>
                </div>

                <div className="keya">
                <img src="/src/assets/Download-img/Linux.png" alt="" />
                <h5>Linux </h5>
                <button>Download </button>
                </div>
                </div>

                 <div className="phone">
                  <img src="/src/assets/Download-img/mockrocket-capture (5) 1.png" alt="" />
                 </div>

                   <div className="Group">
                    <img src="/src/assets/Download-img/Group 12.png" alt="" />
                   </div>
             </div>
      </section> 
       <Footer/>
       </>
      
   
  )
}

