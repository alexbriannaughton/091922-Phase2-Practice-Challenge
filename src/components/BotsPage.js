import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  function handleAddBot(newBot){
    setBotArmy([...botArmy, newBot])
  }

  function onDeleteBot(deletedBot){
    const updatedBots =
    bots.filter((bot)=>bot.id!==deletedBot.id)
    setBots(updatedBots)
  }

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then((r)=>r.json())
    .then((bots)=>setBots(bots))
  },[])

  return (
    <div>
      <YourBotArmy
      botArmy={botArmy}
      setBotArmy={setBotArmy}
      onDeleteBot={onDeleteBot}
      />
      <BotCollection
      bots={bots}
      onAddBot={handleAddBot}
      onDeleteBot={onDeleteBot}
      />
    </div>
  )
}

export default BotsPage;
