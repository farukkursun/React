import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({ gorevler, setGorevler }) => {
  // console.log(gorevler);
  const deleteGorev =(id)=>{
setGorevler(gorevler.filter((i)=>i.id!==id))
  }
  return (
    <div>
      {gorevler.map((gorev) => {
        const { id, text, day, bittiMi } = gorev;
        return (
          <div
            className={bittiMi ? "trueStil" : "falseStil"}
            key={id}
            onDoubleClick={() =>
              setGorevler(gorevler.map((i)=> i.id===id ? {...i,bittiMi:!i.bittiMi}:i))
            }
          >
            <h3>
              {text} <FaTimesCircle style={{ color: "red" }} onClick={()=>deleteGorev(id)}/>
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
