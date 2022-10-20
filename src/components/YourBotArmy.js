import React from "react";
import BotCard from "./BotCard";
import ArmyBotCard from "./ArmyBotCard"

function YourBotArmy({ botArmy, setBotArmy, onDeleteBot }) {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
            <ArmyBotCard
              bot={bot}
              key={bot.id}
              botArmy={botArmy}
              setBotArmy={setBotArmy}
              onDeleteBot={onDeleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
