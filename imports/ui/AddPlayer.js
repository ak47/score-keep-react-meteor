import React from "react";
import { Players } from "./../api/players";

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    debugger;
    if (playerName) {
      e.target.playerName.value = "";
      Players.insert({
        name: playerName,
        score: this.props.score,
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input
            type="text"
            name="playerName"
            placeholder="Player name"
            className="form__input"
          />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
