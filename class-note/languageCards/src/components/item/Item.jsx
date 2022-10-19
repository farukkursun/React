import React from "react";
import { useState } from "react";
import "../card/Card.css";

const Item = ({ veri }) => {
  const [open, setOpen] = useState(false);

  console.log(veri);

  return (
    <div class="row">
      <div className="col-sm-6">
        <div className="card " onClick={() => setOpen(!open)}>
          <div className="card-body">
            
        {open ? veri.options.map((item)=>( <p className="card-text" > <li> {item} </li> </p> )) :(<div><img className="resim" src={veri.img} alt="" />
            <h5 className="card-title text-black">{veri.name}</h5></div>) }
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

