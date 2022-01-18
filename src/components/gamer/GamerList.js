import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GamerContext } from "./GamerProvider.js";
import moment from "moment";

export const GamerList = (props) => {
  const{ currentGamer, getCurrentGamer} = useContext(GamerContext);
  const history = useHistory();

  useEffect(() => {
    getCurrentGamer();
  }, []);

  return (
    <article className="games__wrapper">
      <header>
        <h1>Your Profile</h1>
      </header>
      <section className="gamer_info">
        <header  className="gamer_header">
          <h3>Your Info</h3>
        </header>
      </section>
      <div className="gamer_name">
        <ul>Name: {currentGamer.user.first_name} {""} {currentGamer.user.last_name}</ul>
        <ul>Email: {currentGamer.user.email}</ul>
      </div>
      <div className="attending_header"><h3>Your Events</h3>
        {currentGamer.attending.map((event) =>{
          return (
            <div key={event.id} className="attending_events">
            <section>
               <div className="attending_title">{event.title}</div>
               <div className="attending_date">{moment.utc(event.date).format("dddd, MMMM DD YYYY")}</div>
               <div className="attending_time">{moment(event.time, "HH:mm:ss").format("h:mm a")}</div>
            </section>
            </div>
          )
        })}
      </div>
    </article>

  );
}