import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, onAddBot, onDeleteBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot)=>(
          <BotCard
          key={bot.id}
          bot={bot}
          onAddBot={onAddBot}
          onDeleteBot={onDeleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
