import React from 'react'

const Events = () => {
// javascript alani, degisken tanimlama, fonksiyon yazma
let baslik= 'MERHABA'
let count=0
const arttir =()=>{
   count=count+1; 
   document.querySelector('h2').textContent=`COUNT: ${count}`;
}
const temizle =(parametre)=>{
    document.querySelector('.btn-info').textContent=parametre
}
  return (
// react (jsx) alani ekrana bastirma yeri

    <div className='container text-center mt-4'> 
    <h1>INFO: {baslik}</h1>
    <h2>COUNT: {count} </h2>
    <button className='btn btn-primary' onClick={arttir} >ARTTIR</button>
    <button className='btn btn-info' onClick={()=>temizle('buton temizlendi')}>TEMIZLE</button>
    <button className='btn btn-warning' onClick={()=>alert('buton tiklandi')}>TIKLA</button>
    </div>
  )
}

export default Events


//?------------------------------------------------------------------
//? QUESTION:arttır  butonuna tıklandığında count 1 artmalı

//?-------------------------------------------------------------------
//! Konsolda güncellenen count u görebiliyoruz ancak web sayfasında görüntülenmiyor..
//* Beacause, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------