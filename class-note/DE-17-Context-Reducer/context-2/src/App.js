import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import GosterUsers from "./pages/GosterUsers";
export const KullaniciContext = createContext();

const App = () => {
  const [kullanici, setKullanici] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setKullanici(data));
  }, []);
  // console.log(kullanici);
  const degistirWidth = (id, yeniWidth) => {
    setKullanici(() =>
      kullanici.map((a) => (a.id === id ? { ...a, width: yeniWidth } : a))
    );
  };

  return (
    <KullaniciContext.Provider value={{ kullanici, degistirWidth }}>
      <GosterUsers />
    </KullaniciContext.Provider>
  );
};

export default App;
