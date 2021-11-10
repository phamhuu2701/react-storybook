import React, { Component } from 'react'
import ReactDraftJs from '../components/ReactDraftJs'

class ReactDraftJsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            htmlText: '',
        }
    }

    render() {
        const { htmlText } = this.state

        return (
            <div>
                <ReactDraftJs
                    htmlText={htmlText}
                    onChange={(htmlText) => this.setState({ htmlText })}
                />

                <div
                    style={{
                        background: '#dcdcdc',
                        minHeight: 100,
                        borderRadius: '0.4em',
                        padding: '1em',
                        marginTop: '1em',
                    }}
                >
                    {htmlText}
                </div>
            </div>
        )
    }
}

export default ReactDraftJsDemo
