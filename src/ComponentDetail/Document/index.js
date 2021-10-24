import React, { Component } from "react";
import { Stack } from "react-bootstrap";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component } = this.props;

    return <Stack>{component.document}</Stack>;
  }
}

export default Document;
