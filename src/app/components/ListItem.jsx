import React from "react";

export default class ListItem extends React.Component {
  render() {
    const { title, checked, index, onClickToggle } = this.props;
    return (
      <div className="item">
        <div className="ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            checked={checked}
            onClick={() => onClickToggle(index)}
          />
          <label>{title}</label>
        </div>
      </div>
    );
  }
}
