import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styledComponents from "styled-components";
import { GameContext } from "./GameProvider.js";

export const GameList = (props) => {
  const { games, getGames } = useContext(GameContext);
  const history = useHistory();

  useEffect(() => {
    getGames();
  }, []);

  return (
    <article className="games__wrapper">
      <h1>Games</h1>
      
        {games.map((game) => {
          return (
            <div key={`game--${game.id}`} className="games">
              <section className="game">
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
        <button className="gen_button"
          onClick={() => history.push("/games/new")}>
          Register New Game
        </button>
      
    </article>
  );
};