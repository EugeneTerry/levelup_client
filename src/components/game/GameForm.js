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
    gametype_Id: 0,
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
  const changeGameNameState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.name = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameMakerState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.maker = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGamePlayersState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.number_of_players = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameSkillLevelState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.skill_level = event.target.value;
    setCurrentGame(newGameState);
  };

  const changeGameTypeState = (event) => {
    const newGameState = { ...currentGame };
    newGameState.gametype_Id = event.target.value;
    setCurrentGame(newGameState);
  };
  /* REFACTOR CHALLENGE END */

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
            onChange={changeGameNameState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="skill_level">Skill Level (1-10): </label>
          <input
            type="number" min={0} max={10}
            skill_level="skill_level"
            required
            autoFocus
            className="form-control"
            value={currentGame.skill_level}
            onChange={changeGameSkillLevelState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="maker">Manufacturer: </label>
          <input
            type="text"
            maker="maker"
            required
            autoFocus
            className="form-control"
            value={currentGame.maker}
            onChange={changeGameMakerState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="number_of_players">Number of Players: </label>
          <input
            type="number" min={0}
            number_of_players="number_of_players"
            required
            autoFocus
            className="form-control"
            value={currentGame.number_of_players}
            onChange={changeGamePlayersState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gametype_Id">Select Game Type</label>
            <select
            gametype_Id="gametype_Id"
            id="gametype_Id"
            className="form-control"
            value={currentGame.gametype_Id}
            onChange= {changeGameTypeState}
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
            gametype_Id: parseInt(currentGame.gametype_Id),
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