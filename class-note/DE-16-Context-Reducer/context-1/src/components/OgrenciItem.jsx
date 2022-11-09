import React from "react";
import { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  const { ogrenci, changeRenk } = useContext(OgrenciContext);
  return (
    <div>
      {ogrenci.map((i) => {
        return (
          <div style={{ backgroundColor: i.color }}>
            <h3>Name:{i.name}</h3>
            <h4>Email:{i.email}</h4>
            <h4>Age:{i.age}</h4>
            Color:{" "}
            <input
              type="text"
              name="color"
              value={i.color}
              onChange={(e) => changeRenk(i.id, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
