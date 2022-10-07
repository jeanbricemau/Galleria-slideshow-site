import React from "react";
import { Link } from "react-router-dom";
import './style.scss'


const PaintCard = ({paint}) =>{
  
  let id = paint.name.split(' ')
  id = id.filter((item) => item !== '')

  const img = paint.images.thumbnail
  console.log('img:', img)

  
 
return(
  <Link to={paint.name}  params={{paint}} className={id + '   paintCard'}  style={{backgroundImage: "url('react-gh-pages/." + img+ "')" }}  >
    {/* <img src={paint.images.thumbnail} alt={paint.name} /> */}
    <div className="name">
      <span className="paintName" >{paint.name}</span>
      <span className="artisteName">{paint.artist.name}</span>

    </div>
</Link> 
)
}

export default PaintCard