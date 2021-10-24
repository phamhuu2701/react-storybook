import React, { Component } from "react";
import ScrollToTop from "../components/ScrollToTop";

class ScrollToTopDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo({ top: 300, left: 0 });
  }

  render() {
    return (
      <div style={{ height: 2000 }}>
        <ScrollToTop />
      </div>
    );
  }
}

export default ScrollToTopDemo;
