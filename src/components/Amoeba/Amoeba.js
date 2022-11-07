import React from 'react'
import image1 from "./../../Assets/images/2.jpg";
import image2 from "./../../Assets/images/1.jpg";
import image3 from "./../../Assets/images/3.jpg";
import "./Amoeba.css"
function Amoeba(props) {
  return (
    <div className='amoeba-section'style={{top:props.top}}>
        <div className='amoeba-imge1'>
            <img className='img-fluid' src={props.image1}/>
        </div>
        <div className='amoeba-imge2'>
            <img className='img-fluid' src={props.image3}/>
        </div>
        <div className='amoeba-imge3'>
            <img className='img-fluid' src={props.image2}/>
        </div>
    </div>
  )
}

export default Amoeba