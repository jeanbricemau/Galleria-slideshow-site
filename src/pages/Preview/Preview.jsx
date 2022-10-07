import React from "react";
import './style.scss'


const Preview = (imgPath  ,preview ,SetPreview) => {

  console.log(preview)
console.log('imgPath:', imgPath.img)

  return(
    <> 
     {
      preview =! 1  && 
      <div id="Preview">
        <img src={imgPath.img} alt="" />
        <button onClick={()=>SetPreview(0) }> close </button>
      </div> 
      
    }
      </>
   
  
      


  )
}

export default Preview