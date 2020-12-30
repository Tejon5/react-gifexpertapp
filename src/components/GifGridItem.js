import React from "react";

const GifGridItem = ({id, url, title}) =>{
 //   console.log(id,url,title)
    return(
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )




}


export default GifGridItem;