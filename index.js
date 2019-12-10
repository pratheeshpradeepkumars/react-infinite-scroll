import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: 10,
      loading: false
    };
  }
  componentDidMount() {
    // Detect when scrolled to bottom.
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  loadMore() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 20, loading: false });
    }, 1000);
  }

  showItems() {
    let items = [];
    let i = 0;
    while (i < this.state.items) {
      items.push(<li key={i}>Item {i}</li>);
      i++;
    }
    return items;
  }

  render() {
    return (
      <div ref="myscroll" style={{ height: "450px", overflow: "auto" }}>
        <ul> {this.showItems()} </ul>
        {this.state.loading ? <p className="App-intro">loading ...</p> : ""}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
