import React, { useEffect, useRef } from "react";
import { useState } from "react";

const UseRefComponent = () => {
  // useref 1. kullanaim
  const [sayac, setSayac] = useState(0);
  const sayacRef = useRef(0);

  console.log(sayac);
  console.log(sayacRef.current);

  // useref 2. kullanim

  const inputRef = useRef();
  const divRef = useRef();

  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
  };
  useEffect(()=>{

    inputRef.current.focus();
    
    },[])

  const arttir = () => {
    setSayac(sayac + 1);
    sayacRef.current++;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component </h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={renkDegistir}>ChangeBGColor</button>
      <button onClick={arttir}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;
