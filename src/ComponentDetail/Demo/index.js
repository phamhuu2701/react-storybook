import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const { component } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h5>Demo</h5>

        {component.component && (
          <component.component
            {...component.props}
            onChange={(value) =>
              component.onChange ? this.setState({ value }) : null
            }
          />
        )}

        {component.onChange && (
          <div style={{ marginTop: "1em" }}>
            <h5>Result</h5>
            <div
              style={{
                background: "#dcdcdc",
                minHeight: 100,
                borderRadius: 4,
                padding: "1em",
              }}
            >
              {value}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Demo;
