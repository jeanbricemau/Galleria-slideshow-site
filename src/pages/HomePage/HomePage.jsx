import React from "react";
import { useParams } from "react-router-dom";
import PaintCard from "../../Components/PaintCard/PaintCard";
import data from '../../data' 
import './style.scss'




const HomePage = () =>{
  let {id } = useParams();
  console.log('id:', id)

  return(
    <>
    
    <div id="galery">
       {
      data.map((num) => 
        <PaintCard paint={num} /> 
      // <Link to={num.name} key={data[num]} className={num[num]} > </Link>
       )
    }
    </div>
    

    
    </>
    

  )
}
export default HomePage