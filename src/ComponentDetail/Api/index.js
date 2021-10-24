import React, { Component } from "react";
import "./styles.css";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component } = this.props;

    return (
      <div className="api">
        <div style={{ marginBottom: "1em" }}>
          <h5>Usage</h5>
          {component.usage && (
            <div
              className="code-block"
              style={{
                fontSize: "1.1em",
                color: "#ffffff",
              }}
            >
              &#60;
              <span className="component-name">{component.usage?.name}</span>
              {component.usage?.props?.length > 0 &&
                component.usage?.props.map((item, index) => (
                  <div key={index} style={{ marginLeft: "1em" }}>
                    <span className="component-prop-name">{item[0]}</span>=
                    <span className="component-prop-value">{item[1]}</span>
                  </div>
                ))}
              &#47;&#62;
            </div>
          )}
        </div>

        <div style={{ marginBottom: "1em" }}>
          <h5>API</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {component.api?.length > 0 &&
                component.api.map((item, index) => (
                  <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Api;
