import React, { Component } from "react";
import { Stack } from "react-bootstrap";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component } = this.props;

    return (
      <Stack>
        <component.demo />
      </Stack>
    );
  }
}

export default Demo;
