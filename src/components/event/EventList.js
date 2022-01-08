import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import { useHistory } from "react-router-dom";

export const EventList = (props) => {
  const history = useHistory();
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
      </header>
      {events.map((event) => {
        return (
          <div key={event.id}  className="games">
          <section className="registration">
            <div className="registration__game">{event.game.name}</div>
            <div className="game__name">{event.title}</div>
            <div>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <div>Time: {event.time}
              </div> 
            </div>
          </section>
        </div>
        );
      })}
      <button className="gen_button"
          onClick={() => history.push("/events/new")}>
          Register New Event
        </button>
    </article>
  );
};