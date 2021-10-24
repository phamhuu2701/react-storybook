import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import DraftJsEditor from "../components/DraftJsEditor";

class DraftJsEditorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHtml: "",
    };
  }

  render() {
    const { textHtml } = this.state;

    return (
      <Stack gap={3}>
        <DraftJsEditor
          textHtml={textHtml}
          onChange={(textHtml) => this.setState({ textHtml })}
        />

        <div style={{ borderTop: "1px solid #dcdcdc" }} />

        <div
          style={{
            background: "#dcdcdc",
            minHeight: 100,
            borderRadius: 4,
            padding: "1em",
          }}
        >
          {textHtml}
        </div>
      </Stack>
    );
  }
}

export default DraftJsEditorDemo;
