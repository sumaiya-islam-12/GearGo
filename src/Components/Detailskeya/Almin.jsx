import './Almin.css'

export default function Almin(props) {
    const {title,  body, url, title2, title3, title4, body2, body3, body4, url2, url3, list, title5, url4, url5, body5, title6 ,button} = props.blogdata;
  return (
    <div>
        <p className='heading'>{title}</p>
        <p className='text'>{body}</p>
        <div  className='picture'>
        <img src ={url} alt=""/>
        </div>
        <div className='heads'>
        {title2}
        <p>{body2}</p>
        </div>
        <li  className='count'>{list}</li>
        <div className='picture'> 
        <img src={url2} alt="" />
        </div>
        <div className='heading'>
          {title3}
          <div className='faq'>
            {body3}
          </div>
        </div>
       <div className='picture'>
       <img src={url3} alt="" />
       </div>
       <div className='heading2'>
       {title4}
       </div>
      <div  className='faqs'>
      {body4}
      </div>
      <div  className='item'>
        <img src={url4} alt="" />
        <h3>{title5}</h3>
      </div>
      <div className='mind'>
        <div className='item2'>
          <img src={url5} alt="" />
          <h6>{title6}</h6>
        </div>
        <div className='text2'>
          {body5}
        </div>
      </div>

       
       
      
        
        
    </div>
  )
}
    