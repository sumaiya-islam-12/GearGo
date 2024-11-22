import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (
    <div>
        <Header/>
        <h1>Home</h1>

        <FontAwesomeIcon icon={faHeart} />

        <Footer></Footer>
    </div>
  )
}
