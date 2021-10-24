import React, { Component } from "react";
import { Stack } from "react-bootstrap";
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
        <Stack gap={3}>
          {component.code && (
            <Stack>
              <h5>Code in github</h5>
              <a href={component.code} target="_blank" rel="noreferrer">
                {component.code.replace("tree/master/src/components", "...")}
              </a>
            </Stack>
          )}

          {component.usage && (
            <Stack>
              <h5>Usage</h5>
              <div
                className="code-block"
                style={{
                  fontSize: "1.1em",
                  color: "#ffffff",
                }}
              >
                &#60;
                <span className="component-name">{component.usage?.name}</span>
                {component.usage?.props?.length > 0
                  ? component.usage?.props.map((item, index) => (
                      <div key={index} style={{ marginLeft: "1em" }}>
                        <span className="component-prop-name">{item[0]}</span>=
                        <span className="component-prop-value">{item[1]}</span>
                      </div>
                    ))
                  : " "}
                &#47;&#62;
              </div>
            </Stack>
          )}

          {component.api?.length > 0 && (
            <Stack>
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
                  {component.api.map((item, index) => (
                    <tr key={index}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Stack>
          )}
        </Stack>
      </div>
    );
  }
}

export default Api;
