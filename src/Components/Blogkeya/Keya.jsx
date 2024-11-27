import './Keya.css'


export default function keya(props) {
 const {url, title, date, body} = props.blogdata;
    return (
      
    <div className=''>
      <div className="information">
      <img src={url} alt="" />
        <div className='info'>
        <h3 className='titels'>{title}</h3>
        <h6 className='time'>{date}</h6>
        </div>
        <h4 className='text-area'>{body}</h4>
      </div>
     
        
        
      </div>

  )
}
