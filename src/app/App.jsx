import React from "react";
import ListItem from "./components/ListItem";

class App extends React.Component {
  state = {
    todo: "",
    list: [], // {title,checked}
  };
  onChangeTODO = (e) => {
    this.setState({ todo: e.target.value });
  };
  addTODO = () => {
    const { todo, list } = this.state;
    this.setState({
      list: [{ title: todo, checked: false }, ...list],
      todo: "",
    });
  };
  onClickToggle = (index) => {
    const { list } = this.state;
    list[index].checked = !list[index].checked;
    this.setState({ list: [...list] });
  };
  render() {
    const { todo, list } = this.state;
    return (
      <div className="ui container">
        <div className="ui center aligned basic segment">
          <div className="ui left icon action input">
            <i className="edit icon"></i>
            <input
              type="text"
              placeholder="Enter TODO"
              onChange={this.onChangeTODO}
              value={todo}
            />
            <button
              onClick={this.addTODO}
              className={`ui primary submit button ${
                todo === "" ? "disabled" : ""
              }`}
            >
              ADD
            </button>
          </div>
          <h4 className="ui horizontal divider header">
            <i className="bookmark icon"></i>
            TODO List
          </h4>
          <div className="ui list">
            {list.map((item, index) => {
              return (
                <ListItem
                  title={item.title}
                  checked={item.checked}
                  key={index.toString()}
                  index={index}
                  onClickToggle={this.onClickToggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
