import React, { useState } from "react";


export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);
  const [gametypes, setTypes] = useState([]);

  const getGames = () => {
    return fetch("http://localhost:8000/games", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setGames);
  };

  const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(game),
    }).then((response) => response.json())
      .then(getGames);
  };
  
  const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((response) => response.json())
      .then(setTypes);
  };

  return (
    <GameContext.Provider value={{ games, gametypes, getGames, createGame, getGameTypes }}>
      {props.children}
    </GameContext.Provider>
  );
};