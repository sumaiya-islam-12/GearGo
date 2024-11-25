import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (
    <div>
        <Header/>
          <div>
          <h1 className="home-head">Keep All Controls <span>Of Your Vehicles</span> In your Hand!</h1>
          <img src="/src/assets/Home/artwork.png" alt="" />
          <img src="/src/assets/Home/Group.png" alt="" />
          </div>


        <Footer></Footer>
    </div>
  )
}
