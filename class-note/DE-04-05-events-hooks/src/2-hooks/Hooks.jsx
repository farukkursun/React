import {useState} from 'react'

const Hooks = () => {
// useState her zaman en tepeye yazilmasi tercih edilir
const [sayac, setSayac] = useState(0)

const [bilgi, setBilgi]  = useState({
    isim: 'Mevlüt',
    email: 'mevlüt@gmail.com',
    yas: 30
}) 



const arttir =()=>{
setSayac(sayac+1)
}

const azalt =()=>{
 setSayac(sayac-1)   
}
// const temizle = ()=>{


// }

const degistir=()=>{

    if(bilgi.isim==="Mevlüt"){
     setBilgi({
      isim: "Muhammed",
      email: "Muhammed@gmail.com",
      yas: 29,
    }
    )}else{
    setBilgi({
      isim: "Mevlüt",
      email: "Mevlüt@gmail.com",
      yas: 30,
    });
    
    
    }
}

  return (
    <div className='container'>
    <h2>**************************************************</h2>
    <h1>USESTATE</h1>
    <h2>COUNT:{sayac}</h2>
    <button className='btn btn-primary' onClick={arttir}>ARTTIT</button>
    <button className='btn btn-danger' onClick={azalt}>AZALT</button>
    <button className='btn btn-warning' onClick={()=>setSayac(0)}>TEMIZLE</button>
    <h1>***********************************************************</h1>
    <div className='text-center mt-4'>
    <h1 className='text-danger'>OBJECK ILE USESTATE KULLANIMI</h1>
    <h2>{bilgi.isim}</h2>
    <h5>{bilgi.email}</h5>
    <h5>{bilgi.yas}</h5>
    <button className='btn btn-danger' onClick={degistir}>DEGISTIR</button>
    </div>

    

    




    </div>
  )
}

export default Hooks