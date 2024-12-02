import { useNavigate } from "react-router-dom";
import './FetchProduct.css';


export default function FetchProduct(props) {
    // console.log(props);
    const {title, id, url} = props.fetchdata;
    const navigate = useNavigate();



    const handelDetails = (id) =>{
        const url = `/mainproduct/${id}`
        navigate(url)
    }

  return (
    <div className="fetch-product">
        <button onClick={() => handelDetails(id)}>
        
        
        <img src={url} alt="" />
        <h5>{title}</h5>
        
      </button>
    </div>
  )
}
