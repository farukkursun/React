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
        {/* const { id, text, day, bittiMi } = gorev; */}
        return (
          <div
            className={gorev.bittiMi ? "trueStil" : "falseStil"}
            key={gorev.id}
            onDoubleClick={() =>
              setGorevler(gorevler.map((i)=> i.id===gorev.id ? {...i,bittiMi:!i.bittiMi}:i))
            }
          >
            <h3>
              {gorev.text} <FaTimesCircle style={{ color: "red" }} onClick={()=>deleteGorev(gorev.id)}/>
            </h3>
            <h6>{gorev.day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
