import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import ComponentDetail from "./ComponentDetail";
import routes from "./routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    const { selected } = this.state;

    return (
      <div style={{ margin: "1em", display: "flex", height: "100vh" }}>
        <div
          style={{
            minWidth: 200,
          }}
        >
          <ListGroup variant="flush">
            {routes.map((item, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => this.setState({ selected: item })}
                variant={selected?.id === item.id ? "primary" : ""}
              >
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div
          style={{
            borderRight: "1px solid #dcdcdc",
            margin: "0 1em",
          }}
        ></div>
        <div style={{ flex: 1 }}>
          {selected && <ComponentDetail component={selected} />}
        </div>
      </div>
    );
  }
}

export default App;
