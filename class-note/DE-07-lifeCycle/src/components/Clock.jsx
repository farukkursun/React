import React from "react";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  //!componentDidMount = Component ilk render edildiginde[]
  useEffect(() => {
    const time = setInterval(() => {
      setZaman(moment());
    }, 1000);
    //!componentwillunmount= component kapandiginde yada baska sayfaya gidildiginde
    //!calisan componenti kapat
    return () => {
      clearInterval(time);
      console.log("baska sayfaya gidildigi icin intervel durdu");
    };
  }, []);

  return (
    <div>
      {zaman.format("HH")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("mm")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("ss")}
    </div>
  );
};

export default Clock;
