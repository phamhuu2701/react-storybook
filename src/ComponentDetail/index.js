import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Api from "./Api";
import Demo from "./Demo";
import Document from "./Document";

const NAVS = ["Demo", "Document", "API"];

class ComponentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: NAVS[0],
    };
  }

  renderMainContent = () => {
    const { component } = this.props;
    const { activeKey } = this.state;

    switch (activeKey) {
      case "Demo":
        return <Demo component={component} />;

      case "Document":
        return <Document component={component} />;

      case "API":
        return <Api component={component} />;

      default:
        break;
    }
  };

  render() {
    const { activeKey } = this.state;

    return (
      <div>
        <Nav
          variant="tabs"
          activeKey={activeKey}
          onSelect={(eventKey) => this.setState({ activeKey: eventKey })}
        >
          {NAVS.map((item, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={item}>{item}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <div style={{ padding: "1em 0" }}>{this.renderMainContent()}</div>
      </div>
    );
  }
}

export default ComponentDetail;
