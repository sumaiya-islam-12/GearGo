import { useEffect, useState, } from "react";


export default function Blog() {
    const [post , setPost] = useState ([]);
    useEffect (() =>{
        fetch('/public/Blog.json')
        .then(res => res.json())
        .then(data =>setPost(data))
    }
    )
    
  return (
    <div>
             {
                post.map( Posts => < Posts  postdata = {Posts}/>)
             } 
    </div>
  )
}
