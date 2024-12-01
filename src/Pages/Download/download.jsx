
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Download.css";


export default function Download() {
  return (
    <div>
      <Header/>
          <div className="container">
          {/* First Div */}
          <div className="text">
            <h1>-Get Gear Go on All your Devices-</h1>
            <div className="image-area">
            <img src="/src/assets/Download-img/download.png" alt="" />
          </div>
          </div>
        
          <div className="button-area">
            <a href="">Windows</a>
            <button>Download </button>
            <a href="">Mac OS</a>
            <button>Download </button>
            <a href="">Linux</a>
            <button>Download </button>
          </div>

          {/* Fourth Div */}
          <div className="phone-area">
            <img src="/src/assets/Download-img/download-2.png" alt="" />
          </div>
          {/* Fifth Div */}
          <div className="store-div">
            <img src="" alt="" />
            <img src="/src/assets/img/App-store.jpg" alt="" />
          </div>
        </div>
        <Footer/>
  </div>
  )
}

