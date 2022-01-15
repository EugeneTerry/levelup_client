import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import { useHistory } from "react-router-dom";
import moment from "moment";

export const EventList = () => {
  const history = useHistory();
  const { events, getEvents, joinEvent, leaveEvent} = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
      </header>
      <div className="game__stack">
      {events.map((event) => {
        // const attending = profile.events.some((evt) => evt.id === event.id);
        return (
          <div key={event.id}  className="games">
          <section className="registration">
            <div className="game__name">{event.title}</div>
            <div className="registration__game">Game: {event.game.name}</div>
            <div>
              <p>{moment.utc(event.date).format("dddd, MMMM DD YYYY")}</p>
              <div>Time: {moment(event.time, "HH:mm:ss").format("h:mm a")}
              </div>
            {event.joined ? (
              <button className="small__button__delete" onClick={() => leaveEvent(event.id)}>
                    Leave
                  </button>
            ) : (
              <button className="small__button" onClick={() => joinEvent(event.id)}>
                    Join
                  </button>
            )}
            </div>
          </section>
        </div>
        );
      })}
      </div>
      
        <button className="gen_button"
            onClick={() => history.push("/events/new")}>
            Register New Event
        </button>
    </article>
  );
};