import './Keya.css'
import {useNavigate} from "react-router-dom";


export default function Keya(props) {
  const {url, title1, date, body, id} = props.blogdata;
  const navigate = useNavigate();


 const handleDetails = (id) =>{
  const url =`/details/${id}`
  navigate(url)}



  


    return (
      
    <div className=''>
      <h1>{id}</h1>
      <div className="information">
        <div className='pic'>
      <button onClick={() => handleDetails(id)}>
          <img src={url} alt="" />
        </button>
        </div>
        <div className='info'>
        <h3 className='titels'>{title1}</h3>
        <h6 className='time'>{date}</h6>
        </div>
        <h4 className='text-area'>{body}</h4>
      </div>
     
        
        
      </div>

  )
}