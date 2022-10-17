import "./Card.scss"

const Card = ({dataa}) => {
    console.log(dataa);
  return (
    <div className='konteynir'>
    {dataa.map((veri)=>{
        return(
            <div className='kart' key={veri.id}>
                <h1>{veri.name}</h1>
                <h2>{veri.job}</h2>
                <p>{veri.comment}</p>
                <img src= {veri.img} alt="" />
                <div className='btn-konteynir'>
                    <button className='btn-konteynir-small'>Small</button>
                    <button className='btn-konteynir--large'>large</button>
                </div>
            </div>
        )
    })}


    </div>
  )
}

export default Card