import React, { Component } from "react"
import ReactDraftWysiwyg from "../components/ReactDraftWysiwyg"

class ReactDraftWysiwygDemo extends Component {
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
                <ReactDraftWysiwyg
                    textHtml={textHtml}
                    onChange={(textHtml) => this.setState({ textHtml })}
                    height={200}
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

export default ReactDraftWysiwygDemo
