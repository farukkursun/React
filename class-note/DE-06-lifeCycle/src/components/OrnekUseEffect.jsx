//?==================================================================
//?                       USEEFFECT HOOK
//?==================================================================
//! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
//! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak
//!düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde
//! set et (istediğim bişeyi yap) demek için kullanılır

import { useEffect } from "react";
import { useState } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);import React from "react";
//!!!! setTimeout, zaman aralığından sonra bir işlevi çalıştırmamıza izin verir. setInterval, bir işlevi tekrar tekrar çalıştırmamıza, zaman aralığından sonra başlamamıza ve ardından o aralıkta sürekli tekrarlamamıza izin verir
//!component ilk render edildiğinde çalış, useEffect olmazsa, arttır a her basıldığında, setTimeout tetiklenir.
const OrnekUseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("veri getirildi");
  //   }, 3000);
  // }, []);
  //!count her degistiginde calissin-update
  // useEffect(() => {
  //   alert(count);
  // }, [count]);
  //! saniyede bir console a INTERVAL yazsın, count her değiştiğinde console da yeni sayı yazsın,
  //!component kapandığında da ınterval dursun

  useEffect(() => {
    console.log(count);
    const time = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      clearInterval(time);
      console.log("component öldü");
    };
  }, [count]);

  return (
    <div className="mt-4">
      <h3>COUNT:{count}</h3>

      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        {" "}
        ARTTIR
      </button>
    </div>
  );
};

export default OrnekUseEffect;
