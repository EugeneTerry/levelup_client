import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./EventProvider";
import { GameContext } from "../game/GameProvider";

export const EventForm = () => {
  const history = useHistory();
  const { games, getGames } = useContext(GameContext);
  const { createEvent } = useContext(EventContext);

  const [currentEvent, setCurrentEvent] = useState({
    title: "",
    date: "",
    time: "",
    game_id: 0,
  });

  useEffect(() => {
    getGames();
  }, []);

  const changeEventTitleState = (e) => {
    const newEventState = { ...currentEvent };
    newEventState.title = e.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventDateState = (e) => {
    const newEventState = { ...currentEvent };
    newEventState.date = e.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventTimeState = (e) => {
    const newEventState = { ...currentEvent };
    newEventState.time = e.target.value;
    setCurrentEvent(newEventState);
  };
  const changeEventGameState = (e) => {
    const newEventState = { ...currentEvent };
    newEventState.game_id = e.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <form>
      <h2 className="eventForm__title">Register New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Event Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentEvent.title}
            onChange={changeEventTitleState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentEvent.date}
            onChange={changeEventDateState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Time: </label>
          <input
            type="time"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentEvent.time}
            onChange={changeEventTimeState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_id">Select Game:</label>
            <select
            game_id="game_id"
            id="game_id"
            className="form-control"
            value={currentEvent.game_id}
            onChange= {changeEventGameState}
            >
              <option value="0"> Game </option>
              {
                games.map((game) => (
                  
                  <option key={game.id} value={game.id}>
                    {game.name}
                    
                  </option>)
                )
              }
            </select>          
        </div>
      </fieldset>

      <button 
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const event = {
            title: currentEvent.title,
            date: currentEvent.date,
            time: currentEvent.time,
            game_id: parseInt(currentEvent.game_id),
          };

          createEvent(event).then(() => history.push("/events"));
        }}
        className="gen_button"
        >
          Register
      </button>
    </form>
  );
};