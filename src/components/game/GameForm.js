import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
import { useHistory } from "react-router-dom";

export const GameForm = () => {
  const history = useHistory();
  const { createGame, getGameTypes, gametypes } = useContext(GameContext);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentGame, setCurrentGame] = useState({
    skill_level: 1,
    number_of_players: 0,
    name: "",
    maker: "",
    gametype_id: 0,
    game_creator: 0,
  });

  /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
  useEffect(() => {
    getGameTypes();
  }, []);

  /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */
  const changeGameState = (event) => {
    const key = event.target.name;
    const newGameState = { ...currentGame };
    newGameState[key] = event.target.value;
    setCurrentGame(newGameState);
  };
  
  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentGame.name}
            onChange={changeGameState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="skill_level">Skill Level (1-10): </label>
          <input
            name = "skill_level"
            type="number" min={0} max={10}
            skill_level="skill_level"
            required
            autoFocus
            className="form-control"
            value={currentGame.skill_level}
            onChange={changeGameState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="maker">Manufacturer: </label>
          <input
            type="text"
            maker="maker"
            name="maker"
            required
            autoFocus
            className="form-control"
            value={currentGame.maker}
            onChange={changeGameState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="number_of_players">Number of Players: </label>
          <input
            name ="number_of_players"
            type="number" min={0}
            number_of_players="number_of_players"
            required
            autoFocus
            className="form-control"
            value={currentGame.number_of_players}
            onChange={changeGameState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gametype_id">Select Game Type</label>
            <select
            gametype_id="gametype_id"
            id="gametype_id"
            name = "gametype_id"
            className="form-control"
            value={currentGame.gametype_id}
            onChange= {changeGameState}
            >
              <option value="0"> Type </option>
              {
                gametypes.map((gametype) => (
                  
                  <option key={gametype.id} value={gametype.id}>
                    {gametype.gametype}
                    
                  </option>)
                )
              }
            </select>          
        </div>
      </fieldset>

      {/* You create the rest of the input fields for each game property */}

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const game = {
            maker: currentGame.maker,
            name: currentGame.name,
            number_of_players: parseInt(currentGame.number_of_players),
            skill_level: parseInt(currentGame.skill_level),
            gametype_id: parseInt(currentGame.gametype_id),
          };

          // Send POST request to your API
          createGame(game).then(() => history.push("/games"));
        }}
        className="gen_button"
      >
        Create
      </button>
    </form>
  );
};