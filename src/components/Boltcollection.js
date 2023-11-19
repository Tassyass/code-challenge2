import { useState,useEffect } from 'react';


export default function Boltcollection ({ addToBoltArmy }){

    


    const [bolts,SetBolts]=useState([])


    useEffect (()=>{
      fetch("http://localhost:3000/bots")
      .then(res=>res.json())
      .then(bolts=>{
          SetBolts(bolts)
          
      })
  },[])
  return (
    <>
     <h1>Bot</h1>
      <div className="bolt-cards-container">
        {bolts.map(bolt => (
          <div key={bolt.id} className="bolt-card">
            <img src={bolt.avatar_url}  />
            <h2> Name:{bolt.name}</h2>
            <p>Health:{bolt.health}</p>
            <p>Created-time {bolt.created_at}</p>
            <p>updated-time {bolt.updated_at}</p>
            <button onClick={() => addToBoltArmy(bolt)}>ADD TO</button>

            <h3></h3>
          </div>
        ))}
      </div>
    
    </>
  
  );  

}