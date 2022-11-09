import React, { useContext } from "react";
import { KullaniciContext } from "../App";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { kullanici } = useContext(KullaniciContext);

  console.log(kullanici);
  return (
    <div>
      {kullanici.slice(0, 4).map((i) => (
        <div key={i.id} style={{ backgroundColor: "pink" }}> {i.login}</div>
      ))}

      <AnaUser kullanici={kullanici}/>
    </div>
  );
};

export default Isimler;
