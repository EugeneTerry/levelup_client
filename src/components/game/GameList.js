import React, { useContext, useEffect } from "react";
import styledComponents from "styled-components";
import { GameContext } from "./GameProvider.js";

export const GameList = (props) => {
  const { games, getGames } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="component-wrapper">
      <h2>Games</h2>
      <article className="gameCard">
        {games.map((game) => {
          return (
            <div className="games">
              <section key={`game--${game.id}`} className="game">
                <div className="game__name">
                  {game.name}
                </div>
                <div className="game__maker">
                  Manufactured by {game.maker}
                </div>
                <div className="game__players">
                  {game.number_of_players} players needed
                </div>
                <div className="game__skillLevel">
                  Skill level = {game.skill_level}
                </div>
              </section>
            </div>
          );
        })}
      </article>
    </div>
  );
};