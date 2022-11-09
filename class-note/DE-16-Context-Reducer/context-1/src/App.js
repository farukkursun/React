import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";
//! ogrenci object ve fonksiyon icin context create ediyoruz,
//! disaridan alt compenentlerden kullanima aciyoruz
export const OgrenciContext = createContext();

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  // console.table(ogrenci);
  const changeRenk = (id, yeniColor) => {
    setOgrenci(
      ogrenci.map((a) => (a.id === id ? { ...a, color: yeniColor } : a))
    );
  };
  return (
    <OgrenciContext.Provider value={{ ogrenci, changeRenk }}>
      <Home />
    </OgrenciContext.Provider>
  );
};

export default App;
