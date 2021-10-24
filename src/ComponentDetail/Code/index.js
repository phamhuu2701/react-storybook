import React, { Component } from "react";
import "./styles.css";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component } = this.props;

    return (
      <div className="code">
        {component.folder && (
          <div style={{ marginBottom: "1em" }}>
            <h5>Folder</h5>
            <div className="code-block">
              <div>{component.folder.folder}</div>
              <div style={{ marginLeft: "1em" }}>
                {component.folder.files?.length > 0 &&
                  component.folder.files.map((item, index) => (
                    <div
                      key={index}
                      style={{ borderLeft: "1px solid #e6db74" }}
                    >
                      - {item}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {component.code?.js && (
          <div style={{ marginBottom: "1em" }}>
            <h5>JS code</h5>
            <textarea
              className="code-block"
              value={component.code.js}
              disabled={true}
            />
          </div>
        )}

        {component.code?.css && (
          <div style={{ marginBottom: "1em" }}>
            <h5>CSS code</h5>
            <textarea
              className="code-block"
              value={component.code.css}
              disabled={true}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Code;
