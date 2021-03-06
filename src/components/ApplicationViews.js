import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./event/EventProvider.js";
import { EventList } from "./event/EventList.js";
import { GameForm } from "./game/GameForm.js";
import { EventForm } from "./event/Eventform.js";
import { GamerList } from "./gamer/GamerList.js";

export const ApplicationViews = () => {
  return (
    
      <main
        style={{
          margin: "5rem 2rem",
          backgroundColor: "#dcf2e2",
          lineHeight: "1.75rem",
        }}
      >
        <GameProvider>
          <Route exact path="/profile">
            <GamerList />
          </Route>
          <Route exact path="/">
            <GameList />
          </Route>
          <Route exact path="/games">
            <GameList />
          </Route>
          <Route exact path="/games/new">
            <GameForm />
          </Route>
          <EventProvider>
            <Route exact path="/events">
              <EventList />
            </Route>
            <Route exact path="/events/new">
              <EventForm />
            </Route>
          </EventProvider>
        </GameProvider>
      </main>
  
  );
};
