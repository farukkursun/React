import React from 'react'
import {FaReact} from "react-icons/fa";
import { useState } from "react";
const MouseKeyboard = () => {
const [xEkseni, setxEkseni] = useState(0)
const [yEkseni, setyEkseni] = useState(0)
const mouseOlayi= (e)=>{
  //!pageX komutunu kullanırsanız, bulunduğunuz sayfanın sol üst köşesini 0-0 kabul eder, ona göre konum bildirir
  //!https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
setxEkseni(e.pageX)
setyEkseni(e.pageY)
}


  return (
    <div className='container text-center mt-4 d-flex flex-column align-items-center bg-info'>
    <h2 className='text-danger'>MOUSE EVENTS</h2>
    <p>X ve Y</p>
    <p className='text-danger fw-bold'>{xEkseni} {yEkseni}</p>

    <div className='bg-success text-light w-50 p-4'
    id='coord'
    onMouseMove={mouseOlayi}>

      KORDINATLAR <FaReact/>
    </div>
    </div>
  )
}

export default MouseKeyboard
