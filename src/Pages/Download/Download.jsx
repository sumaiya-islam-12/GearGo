import download from "./Download";
import "./Download.css";


export default function Header() {
  return (
    <div className="container">
    {/* First Div */}
    <div className="text-div">
      <h1>-Get Gear Go on All your Devices-</h1>
    </div>

    {/* Second Div */}
    <div className="image-div">
      <img src="/src/assets/img/download.png" alt="" />
    </div>

    {/* Third Div */}
    <div className="button-div">
      <button>Download 1</button>
      <button>Download 2</button>
      <button>Download 3</button>
    </div>

    {/* Fourth Div */}
    <div className="img-div">
      <img src="/src/assets/img/download-2.png" alt="" />
    </div>
    {/* Fifth Div */}
    <div className="store-div">
      <img src="" alt="" />
      <img src="/src/assets/img/App-store.jpg" alt="" />
    </div>
  </div>
  )
}

