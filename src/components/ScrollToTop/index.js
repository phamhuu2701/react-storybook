import React, { Component } from "react"
import "./styles.css"

class ScrollToTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    handleOnScroll = () => {
        if (window.__scrollTimeout) {
            clearTimeout(window.__scrollTimeout)
        }

        window.__scrollTimeout = setTimeout(() => {
            if (window.pageYOffset <= 200) {
                this.setState({ show: false })
            } else {
                this.setState({ show: true })
            }
        }, 200)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleOnScroll)
    }

    handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0 })
    }

    render() {
        const { show } = this.state

        return show && <div className="scroll-to-top" onClick={this.handleScrollToTop} />
    }
}

export default ScrollToTop
