import React, { Component } from "react";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component } = this.props;

    return (
      <div>
        <h5>Document</h5>
        {component.document}
      </div>
    );
  }
}

export default Document;
