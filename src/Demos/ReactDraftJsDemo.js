import React, { Component } from "react"
import ReactDraftJs from "../components/ReactDraftJs"

class ReactDraftJsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textHtml: "",
        }
    }

    render() {
        const { textHtml } = this.state

        return (
            <div>
                <ReactDraftJs
                    textHtml={textHtml}
                    onChange={(textHtml) => this.setState({ textHtml })}
                />

                <div
                    style={{
                        background: "#dcdcdc",
                        minHeight: 100,
                        borderRadius: "0.4em",
                        padding: "1em",
                        marginTop: "1em",
                    }}
                >
                    {textHtml}
                </div>
            </div>
        )
    }
}

export default ReactDraftJsDemo
