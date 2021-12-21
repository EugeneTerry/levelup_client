import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";

export const ApplicationViews = () => {
  return <>
    <main style={{
          margin: "5rem 2rem",
          backgroundColor: "#dcf2e2",
          lineHeight: "1.75rem",
        }}>
        <GameProvider>
          <Route exact path="/">
            <GameList />
          </Route>
      </GameProvider>
    </main>
  </>
}
