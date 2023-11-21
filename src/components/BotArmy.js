// import React from 'react';



// export default function YourboltArmy({ selectedBolts,removeFromBoltArmy }){
//     const handleRemove = (id) => {
//         removeFromBoltArmy(id);
//       };

    

    
//     return (
//         <>
//         <h1>Your bot army</h1>
        
//       <div className="bolt-cards-container">
//       {selectedBolts.map((bolt, index) => (
//           <div key={index} className="bolt-card">
//         <img src={bolt.avatar_url}/>
//         <h2> Name:{bolt.name}</h2>
//         <p>Health:{bolt.health}</p>
//         <p>Created-time {bolt.created_at}</p>
//         <p>updated-time {bolt.updated_at}</p>
//         <button onClick={() => handleRemove(bolt.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//         </>
//     );
// }


import React from "react"
export default function BotArmy({ bots, releaseFromYourBotArmy, enlistedBots}){

    function releaseBot(releasedBot ){
        const updatedEnlistedBots = enlistedBots.filter(
            (bot) => bot.id !== releasedBot.id
          );
          releaseFromYourBotArmy(updatedEnlistedBots);
    }

    const groupedBots =[];
    

    for (let i = 0; i < enlistedBots.length; i += 5) {
      groupedBots.push(enlistedBots.slice(i, i + 4));
    }

    return (
      <div className="bot-army">
        <h2>Bot Battlr | Your Bot Army</h2>
      {groupedBots.map((group, index) => (
        <div key={index} className="bot-row">
          {group.map((bot) => (
            <div
              key={bot.id}
              className="bot-card enlisted"
              onClick={() => releaseBot(bot)}
            >
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              {/* <p className="catchphrase">Catchphrase: {bot.catchphrase}</p> */}
              
              </div>
            
          ))}
        </div>
      ))}
    </div>
  );
}