import React from "react";
import Msg from "./Msg";

const Person = (props) => {
  // console.log(props);
  const { name, img, tel } = props;
  return (
    <div>
      <h2>{name}</h2>

      <Msg isim={name} telefon={tel}/>
      <img src={img} alt="" />
      <h4>{tel}</h4>
    </div>
  );
};

export default Person;
// osman = {
//  name = "Osman Kara";
// img = "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg";
// tel = "555 55 55"}
